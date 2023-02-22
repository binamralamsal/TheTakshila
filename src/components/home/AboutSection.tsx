import styles from "./AboutSection.module.css";
import { Button } from "@/components/ui/Button";

export const AboutSection = () => {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <div className={`container even-columns ${styles.aboutContainer}`}>
        <div className={styles.images}>
          <div className={styles.row1}>
            <div className={styles.rowImage1Container} data-aos="fade-right">
              <div className={styles.rowIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-medal"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4v3m-4 -3v6m8 -6v6" />
                  <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
                </svg>
              </div>
              <img
                src="/home/about-image-1.jpg"
                className={styles.image1}
                alt=""
              />
            </div>
            <img
              src="/home/about-image-2.jpg"
              className={styles.image2}
              alt=""
              data-aos="fade-right"
            />
          </div>
          <div
            className={styles.row2}
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className={styles.studentsCount}>
              <div className={styles.countIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mood-happy"
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
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                  <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
                </svg>
              </div>

              <div>
                <h3 className={styles.countTitle}>12</h3>
                <p>Interesting Courses</p>
              </div>
            </div>
            <img
              src="/home/about-image-3.jpg"
              className={styles.image3}
              alt=""
            />
          </div>
        </div>
        <div className={styles.aboutDescription}>
          <header>
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              About us
            </span>
            <h2
              className={styles.title}
              id="about-title"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Creating A Community Of Life Long Learners
            </h2>
          </header>

          <p className={styles.caption} data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
            null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi
            pharetra. Facilisi sit miam mauris non iaculis elit fusce amet nunc
            in odio molestie.
          </p>

          <div className={`even-columns ${styles.features}`}>
            <div className={styles.feature}>
              <div
                className={styles.featureIcon}
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-device-laptop"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="3" y1="19" x2="21" y2="19" />
                  <rect x="5" y="6" width="14" height="10" rx="1" />
                </svg>
              </div>

              <div className="feature__content">
                <h3
                  className={styles.featureTitle}
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  Flexible Classes
                </h3>
                <p
                  className="feature__description"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  There are many variations of passages of the Ipsum available
                  for now
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div
                className={styles.featureIcon}
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-school"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              </div>

              <div className="feature__content">
                <h2
                  className={styles.featureTitle}
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  Educator Support
                </h2>
                <p
                  className="feature__caption"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  There are many variations of passages of the Ipsum available
                  for now
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="700">
            <Button href="/about">
              <span> Learn More </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-right"
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
