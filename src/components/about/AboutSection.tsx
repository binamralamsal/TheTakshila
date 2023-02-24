import styles from "./AboutSection.module.css";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <div className={`container even-columns ${styles.aboutContainer}`}>
        <div
          className={styles.images}
          data-aos-delay="50"
          data-aos="fade-right"
        >
          <div className={styles.sessionStats}>
            <strong className={`color-accent ${styles.statTitle}`}>2.98</strong>
            <p className={`color-heading ${styles.statDetails}`}>
              Finished Session
            </p>
          </div>
          <Image src="/about/about.png" alt="About" height={460} width={460} />

          <div className={styles.aboutBottomImage}>
            <Image
              src="/about/about-image-bottom.png"
              className={styles.main}
              alt=""
              height={265.5}
              width={265.5}
            />
            <div className={styles.circleImage} />
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
              Knowledge is power, Information is liberating.
            </h2>
          </header>

          <p className={styles.caption} data-aos="fade-up" data-aos-delay="300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            venenatis dictum et nec. Fringilla dictum tristique cras
            pellentesque consequat.
          </p>

          <h3
            className={`color-heading ${styles.featuresTitle}`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            People Love To Learn With us
          </h3>

          <div
            className={`even-columns ${styles.features}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <h4 className={styles.featureStat}>90%</h4>
              <div>
                <p>90% of students see their course through to completion.</p>
              </div>
            </div>

            <div>
              <h4 className={styles.featureStat} data-aos="fade-up">
                9/10
              </h4>
              <div>
                <p>9/10 users reported better learning outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
