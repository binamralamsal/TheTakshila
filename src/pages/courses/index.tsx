import { PageHeader } from "@/components/layout/PageHeader";
import Head from "next/head";
import { CourseCard } from "@/components/courses/CourseCard";
import styles from "./courses.module.css";

const CoursesPage = () => {
  return (
    <>
      <Head>
        <title>
          Courses | TheTakshila - Committed to Learn Excellence in Education
        </title>
      </Head>
      <PageHeader title="Courses" />

      <section className={`container ${styles.courses}`}>
        <div className={`even-columns ${styles.coursesCards}`}>
          <CourseCard
            course={{
              duration: "2 weeks",
              image: {
                alt: "Course",
                src: "/courses/course-01.jpg",
              },
              numberOfModules: 20,
              title: "Complete Typescript course",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <CourseCard
            course={{
              duration: "2 weeks",
              image: {
                alt: "Course",
                src: "/courses/course-02.jpg",
              },
              numberOfModules: 20,
              title: "Complete Bun.js course",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <CourseCard
            course={{
              duration: "2 weeks",
              image: {
                alt: "Course",
                src: "/courses/course-03.jpg",
              },
              numberOfModules: 20,
              title: "Complete CSS3 course",
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          />

          <CourseCard
            course={{
              duration: "2 weeks",
              image: {
                alt: "Course",
                src: "/courses/course-04.jpg",
              },
              numberOfModules: 20,
              title: "Machine Learning A-Z: Hands-On Python and java",
            }}
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <CourseCard
            course={{
              duration: "2 weeks",
              image: {
                alt: "Course",
                src: "/courses/course-05.jpg",
              },
              numberOfModules: 20,
              title: "Data Structure and Algorithms",
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <CourseCard
            course={{
              duration: "2 weeks",
              image: {
                alt: "Course",
                src: "/courses/course-06.jpg",
              },
              numberOfModules: 20,
              title: "Rust crash course for beginners",
            }}
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
