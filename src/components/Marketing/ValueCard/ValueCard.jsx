import styles from "./ValueCard.module.css";

export default function ValueCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
