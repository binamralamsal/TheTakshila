import styles from "./UpcomingEventSection.module.css";
import { useEffect, useRef, useState } from "react";

export const UpcomingEventSection = () => {
  const deadlineDate = new Date(2023, 2, 25);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (difference < 0) {
        clearInterval(interval);
        setDifference(0);
        return;
      }

      setDifference(deadlineDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.offersSection} aria-labelledby="events-title">
      <div className={`container ${styles.offersContainer}`}>
        <header>
          <h2 className={styles.title} id="offers-title">
            <span className={styles.preTitle} data-aos="fade-up">
              Upcoming Event
            </span>
            <span
              className={styles.mainTitle}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Interested in Registering For<span>The Next Event</span>
            </span>
          </h2>
        </header>

        <ul className={styles.countdowns} data-aos="fade-up">
          <li className={styles.countdown}>
            <h3 className={styles.countdownTitle}>
              {Math.floor(difference / (1000 * 60 * 60 * 24))}
            </h3>
            <p className={styles.subText}>Days</p>
          </li>

          <li className={styles.separator}>:</li>

          <li className={styles.countdown}>
            <h3 className={styles.countdownTitle}>
              {Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              )}
            </h3>
            <p className={styles.subText}>Hours</p>
          </li>

          <li className={styles.separator}>:</li>

          <li className={styles.countdown}>
            <h3 className={styles.countdownTitle}>
              {Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}
            </h3>
            <p className={styles.subText}>Mins</p>
          </li>

          <li className={styles.separator}>:</li>

          <li className={styles.countdown}>
            <h3 className={styles.countdownTitle}>
              {Math.floor((difference % (1000 * 60)) / 1000)}
            </h3>
            <p className={styles.subText}>Secs</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
