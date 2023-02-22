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
                href="/"
                onClick={handleToggleNavbar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/about"
                onClick={handleToggleNavbar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="/course-details"
                onClick={handleToggleNavbar}
              >
                Course Details
              </Link>
            </li>
            <li>
              <Link
                className={styles.navLink}
                href="https://forms.google.com"
                target="_blank"
                onClick={handleToggleNavbar}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
