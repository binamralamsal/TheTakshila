import styles from "./CourseContent.module.css";
import { ICourse } from "@/models/course";
import { TypographyStylesProvider } from "@mantine/core";

export const CourseContent = (props: { course: ICourse }) => {
  return (
    <section>
      <header>
        <h1 className={`color-heading ${styles.courseTitle}`}>
          {props.course.title}
        </h1>
      </header>

      <TypographyStylesProvider>
        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: props.course.content }}
        ></article>
      </TypographyStylesProvider>
    </section>
  );
};
