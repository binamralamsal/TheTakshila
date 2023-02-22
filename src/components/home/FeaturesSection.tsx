import styles from "./FeaturesSection.module.css";
import { Idea, Journey, Money, Resources } from "@/assets/icons";
import Image from "next/image";

export const FeaturesSection = () => {
  return (
    <section
      className={styles.featuresSection}
      aria-labelledby="features-title"
    >
      <div className={`container ${styles.featuresContainer} even-columns`}>
        <div className={styles.image} data-aos="fade-right">
          <Image
            src="/home/features-image.jpg"
            alt="Features"
            width={450}
            height={590}
          />
        </div>
        <div>
          <header data-aos="fade-left">
            <span className={`color-accent ${styles.preTitle}`}>
              Who we are
            </span>
            <h2 className={styles.title} id="features-title">
              We Offer The Best Carrier
            </h2>
          </header>

          <ul className={styles.services}>
            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.serviceIcon}>
                <Idea />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>
                  Earn Money with Unique Projects
                </h3>
                <p>
                  If a student creates a unique project, we assist them so that
                  they can earn money.
                </p>
              </div>
            </li>

            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.serviceIcon}>
                <Money />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>Freelancing for profit</h3>
                <p>
                  Learn how to work as a freelancer and make money through our
                  instructors.
                </p>
              </div>
            </li>

            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={styles.serviceIcon}>
                <Journey />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>
                  Experience and learn at Journey
                </h3>
                <p>
                  Participate in paid or unpaid internships and receive a
                  certificate upon completion.
                </p>
              </div>
            </li>

            <li
              className={styles.service}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={styles.serviceIcon}>
                <Resources />
              </div>
              <div>
                <h3 className={styles.serviceTitle}>
                  Boost your learning with resources
                </h3>
                <p>
                  Access resources, materials, and quizzes on our Telegram
                  channel to enhance your knowledge.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
