import styles from "./CtaBand.module.css";

export default function CtaBand({ title, description, children }) {
  return (
    <section className={styles.band}>
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  );
}
