import {
  AppShell,
  createStyles,
  Burger,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
  Navbar,
  UnstyledButton,
  Avatar,
  Text,
  Box,
  Menu,
  ThemeIcon,
  LoadingOverlay,
  Button,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import {
  IconChevronRight,
  IconLogout,
  IconCheck,
  IconUsers,
  IconSchool,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";

import { useUser } from "@/hooks/useUser";
import { signOut } from "next-auth/react";
import { queryClient } from "@/pages/_app";

export const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data: userData } = useUser();

  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  if (!userData) return <LoadingOverlay visible={true} overlayBlur={2} />;

  if (!userData.user || !userData.user.isAdmin) {
    router.push("/").catch();
    return null;
  }

  const toggleNavbar = () => setOpened(!opened);

  return (
    <>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        navbar={<AppNavbar opened={opened} />}
        header={
          <AppHeader
            links={[{ href: "/", children: "Go to main website" }]}
            opened={opened}
            onToggle={toggleNavbar}
            logo={<Logo />}
          />
        }
        className={classes.main}
      >
        {children}
      </AppShell>
    </>
  );
};

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

const Logo = () => {
  return (
    <Text fw={500} component={Link} href="/admin/users">
      Admin Dashboard
    </Text>
  );
};

export const MainLink = ({ icon, color, label, href }: MainLinkProps) => {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const linkPath = `/admin${href ? `/${href}` : ""}`;

  return (
    <>
      <UnstyledButton
        component={Link}
        href={linkPath}
        className={cx(classes.linkButton, {
          [classes.linkActive]: linkPath === router.asPath,
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </>
  );
};

export const data = [
  {
    icon: <IconUsers size={16} />,
    color: "red",
    label: "Users",
    href: "users",
  },
  {
    icon: <IconSchool size={16} />,
    color: "blue",
    label: "Courses",
    href: "courses",
  },
];

export const MainLinks = () => {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);

  return <>{links}</>;
};

interface AppNavbarProps {
  opened: boolean;
}

export const AppNavbar = (props: AppNavbarProps) => {
  return (
    <Navbar
      width={{ sm: 300, md: 300, lg: 300 }}
      hiddenBreakpoint="sm"
      p="md"
      hidden={!props.opened}
    >
      <Navbar.Section grow mt="xs">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
};

interface AppHeaderProps {
  opened: boolean;
  onToggle: () => void;
  links?: { children: string; href: string }[];
  logo: React.ReactNode;
}

export const AppHeader = (props: AppHeaderProps) => {
  const theme = useMantineTheme();

  return (
    <Header height={60}>
      <Group sx={{ height: "100%" }} px={20} position="apart">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={props.opened}
            onClick={props.onToggle}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        {props.logo}
        <Group>
          <>
            {props.links?.map((link) => (
              <Button
                variant={"outline"}
                component={Link}
                {...link}
                key={link.href}
              />
            ))}
          </>
        </Group>
      </Group>
    </Header>
  );
};

export const useStyles = createStyles((theme) => ({
  main: {
    backgroundColor: theme.colors.gray[0],
  },
  userBox: {
    paddingTop: theme.spacing.sm,
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },
  userButton: {
    display: "block",
    width: "100%",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.black,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
  linkButton: {
    display: "block",
    width: "100%",
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.black,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export const User = () => {
  const { classes } = useStyles();

  const router = useRouter();
  const { data } = useUser();

  const onLogout = async () => {
    await signOut({ redirect: false });
    showNotification({
      icon: <IconCheck size={16} />,
      color: "teal",
      title: "Logged out successfully",
      message: "You can login again if you wish to!",
    });
    await queryClient.setQueryData(["current-user"], () => null);

    await router.push("/");
  };

  const renderUserDetails = () => {
    return (
      <>
        <Avatar color="accent" radius="xl" />
        <Box sx={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {data?.user.name}
          </Text>
          <Text color="dimmed" size="xs">
            {data?.user.email}
          </Text>
        </Box>
      </>
    );
  };

  return (
    <Box className={classes.userBox}>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton className={classes.userButton}>
            <Group>
              {renderUserDetails()}
              <IconChevronRight size={18} />
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            color="red"
            onClick={onLogout}
            icon={<IconLogout size={14} />}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};
