import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const pagesWithTransparentNavbar = ["/"];

export const Navbar = () => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [navbarOpened, setNavbarOpened] = useState(false);

  const transparent = pagesWithTransparentNavbar.includes(router.asPath);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        return setScrolled(true);
      }

      return setScrolled(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleNavbar = () => setNavbarOpened((prev) => !prev);

  return (
    <header
      className={`${styles.navbarWrapper} ${
        transparent ? styles.transparent : ""
      } ${scrolled ? styles.scrolled : ""} `}
    >
      <div className={styles.ribbon}>
        <div className={`container ${styles.ribbonContainer}`}>
          <div>
            <div className={styles.ribbonBlock}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
              <p>982389474283</p>
            </div>
            <div className={`${styles.ribbonBlock} ${styles.canHide}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              <Link href="/">website@domain.com</Link>
            </div>
          </div>
          <div>
            <div className={styles.ribbonBlock}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${styles.navbarContainer}`}>
        <Link data-aos="fade-right" href="/">
          Event
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={navbarOpened}
          aria-label="toggle navigation"
          className={`${styles.mobileNavToggle} ${
            navbarOpened ? styles.active : ""
          }`}
          onClick={handleToggleNavbar}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`${styles.primaryNavigation} ${
            navbarOpened ? styles.active : ""
          }`}
          data-aos="fade-left"
          data-aos-delay="250"
          id="primary-navigation"
        >
          <ul className={styles.navLinks}>
            <li>
              <Link
                className={styles.navLink}
                href="/courses"
                onClick={handleToggleNavbar}
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/about"
                onClick={handleToggleNavbar}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`${styles.navLink} `}
                onClick={handleToggleNavbar}
              >
                Our Services
              </Link>
            </li>

            <li>
              <Link
                className={styles.navLink}
                href="/contact"
                onClick={handleToggleNavbar}
              >
                Enquiry
              </Link>
            </li>

            <li>
              <Link
                className={styles.navLink}
                href="gallery"
                target="_blank"
                onClick={handleToggleNavbar}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
