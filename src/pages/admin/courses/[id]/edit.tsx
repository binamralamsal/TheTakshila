import { AdminDashboardLayout } from "@/components/admin/AdminDashboardLayout";
import {
  Autocomplete,
  Button,
  Container,
  NumberInput,
  SimpleGrid,
  Switch,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { Text } from "@mantine/core";
import { axios } from "@/lib/axios";
import { useForm, zodResolver } from "@mantine/form";
import { NewCourseCredentialsDTO, newCourseSchema } from "@/validators";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import { Link } from "@mantine/tiptap";
import { StarterKit } from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import { queryClient } from "@/pages/_app";
import { ICourse } from "@/models/course";
import { useQuery } from "@tanstack/react-query";
import { TextEditor, UploadBtn } from "@/pages/admin/courses/new";

const getCourse = (
  id: string
): Promise<{ status: "OK" | "ERROR"; course: ICourse }> => {
  return axios.get(`/api/courses/${id}/`);
};

const EditCourse = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(["course", id], () => getCourse(id as string), {
    enabled: router.isReady,
    onSuccess: (d) => {
      form.setValues({
        price: d.course.price,
        content: d.course.content,
        certificate: d.course.certificate,
        instructor: d.course.instructor,
        featuredImage: d.course.featuredImage,
        skillLevel: d.course.skillLevel,
        duration: d.course.duration,
        title: d.course.title,
      });

      editor?.commands.setContent(d.course.content);
    },
  });
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
    onCreate: ({ editor }) => {
      editor.commands.setContent(data?.course.content || "");
    },
    onUpdate: ({ editor }) => {
      form.setFieldValue("content", editor.getHTML());
    },
  });

  const handleUpdateCourse = async (data: NewCourseCredentialsDTO) => {
    await axios.patch(`/api/courses/${id}`, data);

    await queryClient.refetchQueries(["all-courses"]);
    await router.push(`/admin/courses`);
  };

  return (
    <AdminDashboardLayout>
      <Container size="xl">
        <form onSubmit={form.onSubmit(handleUpdateCourse)}>
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
            UpdateCourse
          </Button>
        </form>
      </Container>
    </AdminDashboardLayout>
  );
};

export default EditCourse;
