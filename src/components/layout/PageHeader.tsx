import styles from "./PageHeader.module.css";
import Link from "next/link";

type PageHeaderProps = {
  title: string;
};
export const PageHeader = (props: PageHeaderProps) => {
  return (
    <section className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1 className={`color-heading ${styles.pageTitle}`} data-aos="fade-up">
          {props.title}
        </h1>
        <nav
          className={styles.breadcrumb}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} href="/">
                Home
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </li>
            <li>{props.title}</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
