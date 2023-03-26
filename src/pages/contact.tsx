import styles from "./contact.module.css";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <PageHeader title="Contact" />

      <section
        aria-labelledby="contact-title"
        className={styles.contactSection}
      >
        <div className={`container ${styles.contactContainer}`}>
          <header>
            <h2 className={styles.title} id="contact-title">
              <span className={`color-accent ${styles.preTitle}`}>
                Need Help?
              </span>
              <span className={`color-heading ${styles.mainTitle}`}>
                Get In Touch With us
              </span>
            </h2>
          </header>

          <div className={`even-columns ${styles.contactGrid}`}>
            <div className={`even-columns ${styles.cards}`}>
              <div className={`${styles.card} ${styles.card01}`}>
                <div className={styles.icon}>
                  <svg
                    className="icon-tabler icon-tabler-world-www"
                    fill="none"
                    height="25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                    <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                    <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                    <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                    <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                    <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                    <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                    <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                    <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                  </svg>
                </div>

                <h3 className={styles.title}>Our Website</h3>

                <div>
                  <a href="#" target="_blank">
                    www.thetakshila.in
                  </a>
                  {/* <a href="#" target="_blank">
                    www.wpvibe.com
                  </a> */}
                </div>
              </div>

              <div className={`${styles.card} ${styles.card02}`}>
                <div className={styles.icon}>
                  <svg
                    className=" icon-tabler icon-tabler-phone"
                    fill="none"
                    height="25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </div>

                <h3 className={styles.title}>Call Us</h3>

                <div>
                  {/* <p>+91 9172124795</p> */}
                  <p> +977 9851230893</p>
                </div>
              </div>

              <div className={`${styles.card} ${styles.card03}`}>
                <div className={styles.icon}>
                  <svg
                    className=" icon-tabler icon-tabler-mail"
                    fill="none"
                    height="25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </div>

                <h3 className={styles.title}>Email Us</h3>

                <div>
                  <a href="#" target="_blank">
                    info@thetakshila.in
                  </a>
                  {/* <a href="#" target="_blank">
                    wpvibe@mail.com
                  </a> */}
                </div>
              </div>

              <div className={`${styles.card} ${styles.card04}`}>
                <div className={styles.icon}>
                  <svg
                    className=" icon-tabler icon-tabler-map-pin-filled"
                    fill="none"
                    height="25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <path
                      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                      fill="currentColor"
                      strokeWidth="0"
                    />
                  </svg>
                </div>

                <h3 className={styles.title}>Our Location</h3>

                <div>
                  <p>Balkumari, Kathmandu</p>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <input placeholder="Name*" type="text" />
              <input placeholder="Email*" type="email" />
              <input placeholder="Phone" type="text" />
              <input placeholder="Subject*" type="text" />
              <textarea placeholder="Your Message*" rows={6} />

              <Button href="/about">
                <span> Learn More </span>
                <svg
                  className="icon-tabler icon-tabler-arrow-right"
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

          <div>
            <iframe
              aria-hidden="false"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              tabIndex={0}
              title="Google Map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
