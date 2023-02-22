import styles from "./HeroSection.module.css";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer} even-columns`}>
        <div>
          <header>
            <span
              className={` color-accent ${styles.preTitle}`}
              data-aos="fade-up"
            >
              Better learning future with us
            </span>
            <h1
              className={styles.title}
              data-aos="fade-up"
              data-aos-delay="150"
              id="hero-title"
            >
              Committed To Learn Excellence In Education
            </h1>
          </header>
          <p className={styles.caption} data-aos="fade-up" data-aos-delay="300">
            It is long established that a reader will be distracted by the
            readable popular and best content.
          </p>

          <div data-aos="fade-up" data-aos-delay="450">
            <Button href="/course-details">
              <span> Learn More </span>
              <svg
                className="icon icon-tabler icon-tabler-arrow-right"
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
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <line x1="5" x2="19" y1="12" y2="12" />
                <line x1="13" x2="19" y1="18" y2="12" />
                <line x1="13" x2="19" y1="6" y2="12" />
              </svg>
            </Button>
          </div>
        </div>
        <div className={styles.rightImages}>
          <Image
            alt="Girl thumbchecking"
            className={styles.girlImage}
            data-aos="fade-left"
            data-aos-delay="450"
            width={536.047}
            height={651.188}
            src="/home/girl-thumb.png"
          />
          <Image
            alt="Girl background"
            className={styles.girlBg}
            data-aos="fade-left"
            width={554.969}
            height={529.094}
            data-aos-delay="600"
            src="/home/girl-bg.png"
          />
        </div>
      </div>

      <div>
        <Image
          alt="Decoration 1"
          className={styles.shape1}
          width={88.992}
          height={102}
          src="/home/shape-1.png"
        />
        <Image
          alt="Decoration 3"
          className={styles.shape3}
          width={96}
          height={96}
          src="/home/shape-3.png"
        />
      </div>
    </section>
  );
};
