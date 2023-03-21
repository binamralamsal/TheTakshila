import styles from "./CourseSidebar.module.css";
import { Button } from "@/components/ui/Button";
import { ICourse } from "@/models/course";

export const CourseSidebar = (props: { course: ICourse }) => {
  return (
    <aside className={styles.courseSidebar}>
      <ul>
        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-tabler icon-tabler-clock"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 7l0 5l3 3" />
              </svg>
            </span>
            Duration
          </span>
          <span>{props.course.duration}</span>
        </li>

        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chart-bar"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M4 20l14 0" />
              </svg>
            </span>
            Skill Level
          </span>
          <span>{props.course.skillLevel}</span>
        </li>

        {/*<li>*/}
        {/*  <span className={styles.statTitle}>*/}
        {/*    <span className={styles.icon}>*/}
        {/*      <svg*/}
        {/*        xmlns="http://www.w3.org/2000/svg"*/}
        {/*        className="icon icon-tabler icon-tabler-world"*/}
        {/*        width="14"*/}
        {/*        height="14"*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        strokeWidth="2"*/}
        {/*        stroke="currentColor"*/}
        {/*        fill="none"*/}
        {/*        strokeLinecap="round"*/}
        {/*        strokeLinejoin="round"*/}
        {/*      >*/}
        {/*        <path stroke="none" d="M0 0h24v24H0z" fill="none" />*/}
        {/*        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />*/}
        {/*        <path d="M3.6 9l16.8 0" />*/}
        {/*        <path d="M3.6 15l16.8 0" />*/}
        {/*        <path d="M11.5 3a17 17 0 0 0 0 18" />*/}
        {/*        <path d="M12.5 3a17 17 0 0 1 0 18" />*/}
        {/*      </svg>*/}
        {/*    </span>*/}
        {/*    Language*/}
        {/*  </span>*/}
        {/*  <span>English</span>*/}
        {/*</li>*/}

        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-certificate"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <path d="M6 9l12 0" />
                <path d="M6 12l3 0" />
                <path d="M6 15l2 0" />
              </svg>
            </span>
            Certificate
          </span>
          <span>{props.course.certificate ? "Yes" : "No"}</span>
        </li>

        <li>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </span>
            Instructor
          </span>
          <span>{props.course.instructor}</span>
        </li>

        <li className={styles.lastDetail}>
          <span className={styles.statTitle}>
            <span className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-currency-rupee-nepalese"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" />
                <path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" />
              </svg>
            </span>
            Price
          </span>
          <span>Rs. {props.course.price}</span>
        </li>
      </ul>
      <Button size="large" href="https://forms.google.com" target="_blank">
        Register
        <svg
          className="icon-tabler icon-tabler-arrow-right s-xcnQQNRdRv-M"
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0h24v24H0z"
            fill="none"
            stroke="none"
            className="s-xcnQQNRdRv-M"
          />
          <line x1="5" x2="19" y1="12" y2="12" className="s-xcnQQNRdRv-M" />
          <line x1="13" x2="19" y1="18" y2="12" className="s-xcnQQNRdRv-M" />
          <line x1="13" x2="19" y1="6" y2="12" className="s-xcnQQNRdRv-M" />
        </svg>
      </Button>
    </aside>
  );
};
