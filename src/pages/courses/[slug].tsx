import Head from "next/head";
import styles from "./course-details.module.css";
import { PageHeader } from "@/components/layout/PageHeader";
import { CourseContent } from "@/components/course-details/CourseContent";
import { CourseSidebar } from "@/components/course-details/CourseSidebar";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Slug = () => {
  return (
    <>
      <Head>
        <title>Course Details | Xavier Entrepreneurship Bootcamp</title>
      </Head>

      <Navbar />
      <PageHeader title="Course Details" />
      <Image
        src="/courses/course-thumbnail.jpg"
        alt=""
        width={1300}
        height={570}
        className={styles.courseBg}
      />

      <div className={`container ${styles.courseContent}`}>
        <CourseContent />
        <CourseSidebar />
      </div>
      <Footer />
    </>
  );
};

export default Slug;
