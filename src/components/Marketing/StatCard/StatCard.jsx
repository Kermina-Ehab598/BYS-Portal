import styles from "./StatCard.module.css";

export default function StatCard({ num, label }) {
  return (
    <article className={styles.card}>
      <div className={styles.num}>{num}</div>
      <div className={styles.label}>{label}</div>
    </article>
  );
}
