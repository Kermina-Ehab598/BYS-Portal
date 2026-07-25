import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandLogo}>
          <img src=""></img>
        </div>
        <div className={styles.brandText}>
          <h1>BYS · بوابة المتطوعين</h1>
          <p>VOLUNTEER PORTAL</p>
        </div>
      </div>
    </header>
  );
}
