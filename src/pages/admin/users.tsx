import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { axios } from "@/lib/axios";
import { IUser } from "@/models/user";
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Container,
  Drawer,
  Group,
  LoadingOverlay,
  PasswordInput,
  ScrollArea,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconEdit, IconSearch, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import { openConfirmModal } from "@mantine/modals";
import { queryClient } from "@/pages/_app";
import {
  RegisterUserCredentialsDTO,
  registerUserSchema,
  UpdateUserCredentialsDTO,
  updateUserSchema,
} from "@/validators";
import { useForm, zodResolver } from "@mantine/form";

const getUsers = async (): Promise<{
  status: "OK" | "ERROR";
  users: IUser[];
}> => {
  return axios.get("/api/auth/users/");
};

const Users = () => {
  const [drawerOpened, { open: handleOpenDrawer, close: handleCloseDrawer }] =
    useDisclosure(false);

  return (
    <AdminDashboardLayout>
      <Container size="xl">
        <Title order={1} mt="sm">
          Users
        </Title>

        <Stack mt="xl" justify="space-between" style={{ flexDirection: "row" }}>
          <form>
            <TextInput
              placeholder="Search users"
              icon={<IconSearch size={14} />}
              size="md"
            />
          </form>
          <Button onClick={handleOpenDrawer} size="md">
            Add users
          </Button>

          <AddUserDrawer opened={drawerOpened} onClose={handleCloseDrawer} />
        </Stack>

        <UsersTable />
      </Container>
    </AdminDashboardLayout>
  );
};

export function UsersTable() {
  const { data } = useQuery(["all-users"], getUsers, {
    onSuccess: () => {
      setSelectedUser(undefined);
    },
  });

  const [drawerOpened, { open: handleOpenDrawer, close: handleCloseDrawer }] =
    useDisclosure(false);
  const [selectedUser, setSelectedUser] = useState<IUser>();

  if (!data) return <LoadingOverlay visible={true} overlayBlur={2} />;

  const handleDeleteUser = async (user: IUser) => {
    openConfirmModal({
      title: "Delete user",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this user ({user.name} #{user._id})?
        </Text>
      ),
      labels: { confirm: "Delete User", cancel: "No don't delete" },
      confirmProps: { color: "red" },
      onConfirm: async () => {
        try {
          await axios.delete(`/api/auth/users/${user._id}`);
        } catch (error) {
          console.log(error);
        }
        await queryClient.refetchQueries(["all-users"]);
      },
    });
  };

  const rows = data.users.map((item) => (
    <tr key={item._id}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Badge color="blue">{item.isAdmin ? "superuser" : "user"}</Badge>
      </td>

      <td>
        <Group>
          <ActionIcon
            onClick={() => {
              setSelectedUser(item);

              setTimeout(() => {
                handleOpenDrawer();
              }, 0);
            }}
            variant="outline"
            color="blue"
          >
            <IconEdit size={18} />
          </ActionIcon>

          <ActionIcon
            variant="outline"
            color="red"
            onClick={() => handleDeleteUser(item)}
          >
            <IconTrash size={18} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table miw={"100%"} mt="xl" verticalSpacing="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      {selectedUser ? (
        <EditUserDrawer
          opened={drawerOpened}
          onClose={handleCloseDrawer}
          user={selectedUser}
          key={selectedUser._id}
        />
      ) : null}
    </ScrollArea>
  );
}

interface DrawerProps {
  opened: boolean;
  onClose: () => void;
}
const AddUserDrawer = (props: DrawerProps) => {
  const form = useForm<RegisterUserCredentialsDTO>({
    validateInputOnBlur: true,
    validate: zodResolver(registerUserSchema),
    initialValues: {
      password: "",
      email: "",
      name: "",
      isAdmin: false,
    },
  });

  const handleAddUser = async (data: RegisterUserCredentialsDTO) => {
    await axios.post("/api/auth/users", data);
    form.reset();
    props.onClose();
    await queryClient.refetchQueries(["all-users"]);
  };

  return (
    <Drawer opened={props.opened} onClose={props.onClose} title="Add User">
      <form onSubmit={form.onSubmit(handleAddUser)}>
        <Avatar size={60} radius={60} />

        <TextInput
          label="Full name"
          mt="md"
          withAsterisk
          error={form.errors.name}
          {...form.getInputProps("name")}
        />

        <TextInput
          mt="md"
          withAsterisk
          label="Email"
          error={form.errors.email}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          mt="md"
          label="Password"
          withAsterisk
          error={form.errors.password}
          {...form.getInputProps("password")}
        />

        <Checkbox
          mt="md"
          label="Is this user admin?"
          error={form.errors.isAdmin}
          {...form.getInputProps("isAdmin")}
        />

        <Button type="submit" mt="xl">
          Add User
        </Button>
      </form>
    </Drawer>
  );
};

const EditUserDrawer = (props: DrawerProps & { user: IUser }) => {
  const form = useForm<UpdateUserCredentialsDTO>({
    validateInputOnBlur: true,
    validate: zodResolver(updateUserSchema),
    initialValues: {
      name: props.user.name,
      email: props.user.email,
      isAdmin: props.user.isAdmin,
    },
  });

  const handleUpdateUser = async (data: UpdateUserCredentialsDTO) => {
    await axios.patch(`/api/auth/users/${props.user?._id}/`, data);
    form.reset();
    props.onClose();
    await queryClient.refetchQueries(["all-users"]);
  };

  return (
    <Drawer opened={props.opened} onClose={props.onClose} title="Update Member">
      <Group spacing="sm">
        <Avatar size={40} radius={40} />
        <div>
          <Text fz="sm" fw={500}>
            {props.user.name}
          </Text>
          <Text fz="xs" c="dimmed">
            {props.user.email}
          </Text>
        </div>
      </Group>

      <form onSubmit={form.onSubmit(handleUpdateUser)}>
        <TextInput
          label="Full name"
          mt="md"
          withAsterisk
          error={form.errors.name}
          {...form.getInputProps("name")}
        />

        <TextInput
          mt="md"
          withAsterisk
          label="Email"
          error={form.errors.email}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          mt="md"
          label="Password"
          error={form.errors.password}
          {...form.getInputProps("password")}
          description={"Leave it empty to not change password"}
        />

        {!props.user.isAdmin ? (
          <Checkbox
            mt="md"
            label="Is this user admin?"
            checked={form.values.isAdmin}
            error={form.errors.isAdmin}
            {...form.getInputProps("isAdmin")}
          />
        ) : null}

        <Button type="submit" mt="xl">
          Update User
        </Button>
      </form>
    </Drawer>
  );
};

export default Users;
