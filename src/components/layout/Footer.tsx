import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyrightText}>
        Copyright {new Date().getFullYear()}. Made by Xavier Computer and Coding
        Club
      </p>
    </footer>
  );
};
