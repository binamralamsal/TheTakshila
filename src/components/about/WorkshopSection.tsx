import styles from "./WorkshopSection.module.css";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const WorkshopSection = () => {
  return (
    <section
      className={styles.workshopSection}
      aria-labelledby="workshop-title"
    >
      <div className={`even-columns container ${styles.workshopContainer}`}>
        <div>
          <header data-aos="fade-right">
            <span className={styles.preTitle}>Free Workshop</span>
            <h2 className={styles.title} id="workshop-title">
              Join Our Free Workshops
            </h2>
          </header>
          <p className={styles.workshopDetail} data-aos="fade-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet,
            consect adipi scing elit, sed do eiusmod tempor incididunt ut sed do
            eiusmod tempor incididunt ut labore et dolore aliqua.
          </p>

          <div data-aos="fade-right">
            <Button
              variant="lightSecondary"
              size="large"
              href="/course-details"
            >
              <span>Join Event</span>
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

        <div className={styles.workshopImage} data-aos="fade-left">
          <Image
            src="/about/workshop.jpg"
            alt="workshop"
            width={531}
            height={348.172}
          />
        </div>
      </div>
    </section>
  );
};
