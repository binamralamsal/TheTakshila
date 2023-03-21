import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import {
  Autocomplete,
  Button,
  Container,
  Flex,
  NumberInput,
  SimpleGrid,
  Switch,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { useRef } from "react";
import { Text, Group, createStyles, rem } from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import { axios } from "@/lib/axios";
import { useForm, zodResolver } from "@mantine/form";
import { NewCourseCredentialsDTO, newCourseSchema } from "@/validators";
import { UploadImageResponse } from "@/pages/api/upload";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { Editor, useEditor } from "@tiptap/react";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { StarterKit } from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import { queryClient } from "@/pages/_app";

const NewCourse = () => {
  const form = useForm<NewCourseCredentialsDTO>({
    validateInputOnBlur: true,
    validate: zodResolver(newCourseSchema),
    initialValues: {
      featuredImage: "",
      title: "",
      content: "",
      certificate: true,
      duration: "",
      instructor: "",
      price: 0,
      skillLevel: "",
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    onUpdate: ({ editor }) => {
      form.setFieldValue("content", editor.getHTML());
    },
  });
  const router = useRouter();

  const handleAddCourse = async (data: NewCourseCredentialsDTO) => {
    await axios.post(`/api/courses/`, data);

    await queryClient.refetchQueries(["all-courses"]);
    await router.push(`/admin/courses`);
  };

  return (
    <AdminDashboardLayout>
      <Container size="xl">
        <form onSubmit={form.onSubmit(handleAddCourse)}>
          <Title order={1} mt="sm">
            New Course
          </Title>

          <UploadBtn
            value={form.values.featuredImage}
            onChange={(val: string) => {
              form.setFieldValue("featuredImage", val);
            }}
          />
          {form.errors.featuredImage ? (
            <Text fz="xs" color={"red"}>
              {form.errors.featuredImage}
            </Text>
          ) : null}

          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            sx={{ gridTemplateColumns: "3fr 1fr" }}
          >
            <TextInput
              label="Title"
              error={form.errors.title}
              {...form.getInputProps("title")}
              withAsterisk
            />
            <TextInput
              label="Duration"
              error={form.errors.duration}
              {...form.getInputProps("duration")}
              withAsterisk
            />
          </SimpleGrid>

          <SimpleGrid
            cols={3}
            mt="md"
            breakpoints={[
              { maxWidth: "sm", cols: 1 },
              { maxWidth: "md", cols: 2 },
            ]}
          >
            <TextInput
              label="Instructor"
              error={form.errors.instructor}
              {...form.getInputProps("instructor")}
              withAsterisk
            />
            <Autocomplete
              label="Skill Level"
              error={form.errors.skillLevel}
              {...form.getInputProps("skillLevel")}
              data={[
                { value: "Beginner" },
                { value: "Intermediate" },
                { value: "Advanced" },
              ]}
              withAsterisk
            />
            <NumberInput
              label="Price"
              error={form.errors.price}
              {...form.getInputProps("price")}
              withAsterisk
            />
          </SimpleGrid>

          <Switch
            mt="md"
            label="We provide certificate for this course"
            checked={form.values.certificate}
            error={form.errors.certificate}
            {...form.getInputProps("certificate")}
          />

          <TextEditor content={form.values.content} editor={editor} />
          {form.errors.content ? (
            <Text fz="xs" color={"red"}>
              {form.errors.content}
            </Text>
          ) : null}

          <Button mt="md" type="submit">
            Add Course
          </Button>
        </form>
      </Container>
    </AdminDashboardLayout>
  );
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginTop: rem(30),
    marginBottom: rem(30),
  },

  dropzone: {
    borderWidth: rem(1),
    paddingBottom: rem(50),
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: "absolute",
    width: rem(250),
    left: `calc(50% - ${rem(125)})`,
    bottom: rem(-20),
  },
}));

interface UploadBtnProps {
  value: string;
  onChange: (val: string) => void;
}

export function UploadBtn(props: UploadBtnProps) {
  const { classes, theme } = useStyles();
  const openRef = useRef<() => void>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (files: FileWithPath[]) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", files[0]);

    const data = (await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })) as UploadImageResponse;

    props.onChange(data.url);
    setIsLoading(false);
  };

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={handleFileUpload}
        className={classes.dropzone}
        radius="md"
        accept={[
          MIME_TYPES.png,
          MIME_TYPES.jpeg,
          MIME_TYPES.avif,
          MIME_TYPES.webp,
        ]}
        maxSize={10 * 1024 ** 2}
        multiple={false}
        loading={isLoading}
        sx={{
          backgroundImage: props.value
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${props.value}")`
            : "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group position="center">
            <Dropzone.Accept>
              <IconDownload
                size={rem(50)}
                color={
                  props.value ? theme.colors.gray[0] : theme.colors.dark[7]
                }
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                size={rem(50)}
                color={props.value ? "white" : theme.colors.dark[7]}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text
            ta="center"
            fw={700}
            fz="lg"
            mt="xl"
            color={props.value ? "white" : theme.colors.dark[7]}
          >
            <Dropzone.Accept>Drop file here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>
              {props.value ? "Update" : "Upload"} Featured Image
            </Dropzone.Idle>
          </Text>
          <Text
            ta="center"
            fz="sm"
            mt="xs"
            color={props.value ? "white" : theme.colors.dark[5]}
          >
            Drag&apos;n&apos;drop file here to upload. We can accept only{" "}
            <i>images</i> that are less than 10mb in size.
          </Text>
        </div>
      </Dropzone>
      <Button
        className={classes.control}
        size="md"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Select file
      </Button>
    </div>
  );
}

export function TextEditor(props: { content: string; editor: null | Editor }) {
  return (
    <RichTextEditor editor={props.editor} mt="md">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export default NewCourse;
