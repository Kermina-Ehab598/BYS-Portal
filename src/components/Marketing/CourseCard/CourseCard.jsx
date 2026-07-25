import styles from "./CourseCard.module.css";

export default function CourseCard({ level, title, description }) {
  return (
    <div className={styles.card}>
      <span className={styles.level}>{level}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
