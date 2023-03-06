import styles from "./Testimonials.module.css";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className={styles.awardSection} aria-labelledby="events-title">
      <div className={`container ${styles.awardContainer}`}>
        <header>
          <h2 className={styles.title} id="award-title">
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              What our users say?
            </span>
            <span
              className={`color-heading ${styles.mainTitle}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Testimonials
            </span>
          </h2>
        </header>

        <ul className={styles.awards}>
          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/person-01.jpg"
              alt=""
              className={styles.personImage}
              height={80}
              width={80}
            />
            <h3 className={`color-heading ${styles.testimonialTitle}`}>
              John Smith
              <small>Founder of Xyz</small>
            </h3>
            <blockquote className={styles.testimonialSubText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              assumenda deleniti, esse e
            </blockquote>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/person-02.jpg"
              alt=""
              className={styles.personImage}
              height={80}
              width={80}
            />
            <h3 className={`color-heading ${styles.testimonialTitle}`}>
              John Smith
              <small>Founder of Xyz</small>
            </h3>
            <blockquote className={styles.testimonialSubText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              assumenda deleniti, esse e
            </blockquote>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/person-03.jpg"
              alt=""
              className={styles.personImage}
              height={80}
              width={80}
            />
            <h3 className={`color-heading ${styles.testimonialTitle}`}>
              John Smith
              <small>Founder of Xyz</small>
            </h3>
            <blockquote className={styles.testimonialSubText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              assumenda deleniti, esse e
            </blockquote>
          </li>
        </ul>
      </div>
    </section>
  );
};
