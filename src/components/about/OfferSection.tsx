import styles from "./OfferSection.module.css";
import Image from "next/image";

export const OfferSection = () => {
  return (
    <section className={styles.offersSection} aria-labelledby="events-title">
      <div className={`container ${styles.offersContainer}`}>
        <header>
          <h2 className={styles.title} id="offers-title">
            <span
              className={`color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              What We Offer
            </span>
            <span
              className={`color-heading ${styles.mainTitle}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Learn New Skills When And<span>Where You Like</span>
            </span>
          </h2>
        </header>

        <ul className={styles.offers}>
          <li
            className={`${styles.offer} ${styles.offer01}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-01.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Remote Learning</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>

          <li
            className={`${styles.offer} ${styles.offer02}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-02.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Awesome Tutors</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>

          <li
            className={`${styles.offer} ${styles.offer03}`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-03.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Global Certificate</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>

          <li
            className={`${styles.offer} ${styles.offer04}`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles.offerIcon}>
              <Image src="/about/offer-04.png" alt="" height={40} width={40} />
            </div>
            <h3 className={styles.offerTitle}>Carrier Guideline</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
