import Link from "next/link";
import styles from "./CourseCard.module.css";
import { ICourse } from "@/models/course";
import { IconClock, IconCurrencyRupeeNepalese } from "@tabler/icons-react";

export const CourseCard = ({ course, ...restProps }: { course: ICourse }) => {
  return (
    <div className={styles.card} {...restProps}>
      <Link href={`/courses/${course._id}`} className={styles.imageLink}>
        <img
          className={styles.image}
          src={course.featuredImage}
          alt={"Course"}
        />
      </Link>

      <div className={styles.description}>
        <p className={styles.skillLevelBadge}>{course.skillLevel}</p>

        <header className={styles.header}>
          <Link href={`/courses/${course._id}`} className={styles.title}>
            <h3>{course.title}</h3>
          </Link>
        </header>

        <ul className={styles.stats}>
          <li>
            <IconClock stroke={1.5} height={18} width={18} />
            {course.duration}
          </li>
          <li>
            <IconCurrencyRupeeNepalese stroke={1.5} height={18} width={18} />
            {course.price}
          </li>
        </ul>

        <hr className={styles.separator} />

        <Link href={`/courses/${course._id}`} className={styles.enrolBtn}>
          Enroll Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-narrow-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0m-4 4l4 -4m-4 -4l4 4" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
