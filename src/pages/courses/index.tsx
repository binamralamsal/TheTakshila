import { PageHeader } from "@/components/layout/PageHeader";
import Head from "next/head";
import { CourseCard } from "@/components/courses/CourseCard";
import styles from "./courses.module.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { connectDatabase } from "@/utils/db";
import Course, { ICourse } from "@/models/course";

const CoursesPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      <Head>
        <title>
          Courses | TheTakshila - Committed to Learn Excellence in Education
        </title>
      </Head>

      <Navbar />
      <PageHeader title="Courses" />

      <section className={`container ${styles.courses}`}>
        <div className={`even-columns ${styles.coursesCards}`}>
          {props.courses.map((course: ICourse) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connectDatabase();

  const courses = (await Course.find()) as ICourse[];

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  };
};

export default CoursesPage;
