import styles from "./CourseContent.module.css";

export const CourseContent = () => {
  return (
    <section>
      <header>
        <h1 className={`color-heading ${styles.courseTitle}`}>
          Xavier Innovation and Entrepreneurship Bootcamp
        </h1>
      </header>

      <article className={styles.article}>
        <h2>Course Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>

        <h2>What You'll Learn From This Course</h2>
        <ul>
          <li>
            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
          </li>
          <li>
            Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam
            id diam maer
          </li>
          <li>
            Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
          </li>
          <li>
            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
            sociis
          </li>
        </ul>

        <h2>Certification</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </article>
    </section>
  );
};
