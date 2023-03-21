import Head from "next/head";
import styles from "./course-details.module.css";
import { PageHeader } from "@/components/layout/PageHeader";
import { CourseContent } from "@/components/course-details/CourseContent";
import { CourseSidebar } from "@/components/course-details/CourseSidebar";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Course, { ICourse } from "@/models/course";
import { connectDatabase } from "@/utils/db";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const SingleCoursePage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      <Head>
        <title>Course Details | Xavier Entrepreneurship Bootcamp</title>
      </Head>

      <Navbar />
      <PageHeader title="Course Details" />
      <Image
        src={props.course.featuredImage}
        alt=""
        width={1300}
        height={570}
        className={styles.courseBg}
      />

      <div className={`container ${styles.courseContent}`}>
        <CourseContent course={props.course} />
        <CourseSidebar course={props.course} />
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connectDatabase();

  const { slug } = context.query;

  const course = (await Course.findById(slug as string)) as ICourse;

  if (!course)
    return {
      notFound: true,
    };

  return {
    props: { course: JSON.parse(JSON.stringify(course)) },
  };
};

export default SingleCoursePage;
