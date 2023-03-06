import Link from "next/link";
import styles from "./CourseCard.module.css";

export const CourseCard = ({
  course,
  ...restProps
}: {
  course: {
    image: {
      alt: string;
      src: string;
    };
    title: string;
    duration: string;
    numberOfModules: number;
  };
}) => {
  return (
    <div className={styles.card} {...restProps}>
      <Link
        href="/courses/complete-typescript-course"
        className={styles.imageLink}
      >
        <img
          className={styles.image}
          src={course.image.src}
          alt={course.image.alt}
        />
      </Link>

      <div className={styles.description}>
        <header>
          <Link
            href="/courses/complete-typescript-course"
            className={styles.title}
          >
            <h3>{course.title}</h3>
          </Link>
        </header>

        <ul className={styles.stats}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-clock"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0m9 -5l0 5l3 3" />
            </svg>
            {course.duration}
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-vocabulary"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2zm2 -14v16m-5 -14h1m-1 4h1m8 -4h1m-1 4h1m-1 4h1" />
            </svg>
            {course.numberOfModules} Modules
          </li>
        </ul>

        <hr className={styles.separator} />

        <Link
          href="/courses/complete-typescript-course"
          className={styles.enrolBtn}
        >
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
