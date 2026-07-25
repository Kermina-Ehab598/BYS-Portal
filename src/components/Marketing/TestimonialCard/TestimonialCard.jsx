import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ quote, initial, name, role }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.infoRow}>
        <div className={styles.icon}>{initial}</div>
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>{role}</div>
        </div>
      </div>
    </div>
  );
}
