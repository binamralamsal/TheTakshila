import styles from "./CourseCategories.module.css";
import Image from "next/image";

export const CourseCategories = () => {
  return (
    <section className={styles.awardSection} aria-labelledby="events-title">
      <div className={`container ${styles.awardContainer}`}>
        <header>
          <h2 className={styles.title} id="award-title">
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              COURSE CATEGORIES
            </span>
            <span
              className={`color-heading ${styles.mainTitle}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Popular Topics To Learn
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
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Human Research{" "}
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-02.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Web Development{" "}
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-03.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Best Customer Support
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-04.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Top Selling Premium Item
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-01.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Human Research{" "}
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-02.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Web Development{" "}
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-03.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Best Customer Support
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>

          <li className={styles.award} data-aos="fade-up">
            <Image
              src="/about/award-04.png"
              alt=""
              className={styles.awardImage}
              height={40}
              width={40}
            />
            <h3 className={`color-heading ${styles.awardTitle}`}>
              Top Selling Premium Item
            </h3>
            <p className={styles.awardSubText}>
              Lore Ipsum a simply dummy text of the printing.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
