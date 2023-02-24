import styles from "./AwardSection.module.css";
import Image from "next/image";

export const AwardSection = () => {
  return (
    <section className={styles.awardSection} aria-labelledby="events-title">
      <div className={`container ${styles.awardContainer}`}>
        <header>
          <h2 className={styles.title} id="award-title">
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              Award
            </span>
            <span
              className={`color-heading ${styles.mainTitle}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Our Winning Award
            </span>
          </h2>
        </header>

        <ul className={styles.awards}>
          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-01.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <p className={styles.awardSubText}>Market / 2023</p>
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Evanto Design of The Week
            </h3>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-02.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <p className={styles.awardSubText}>Udemy / 2023</p>
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Award Site of The Year
            </h3>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-03.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <p className={styles.awardSubText}>Review / 2023</p>
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Best Customer Support
            </h3>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-04.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <p className={styles.awardSubText}>Market / 2023</p>
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Top Selling Premium Item
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
