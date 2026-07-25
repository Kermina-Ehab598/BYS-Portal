import styles from "./NewsCard.module.css";

export default function NewsCard({ date, title, excerpt }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>صورة الخبر</div>
      <div className={styles.body}>
        <div className={styles.date}>{date}</div>
        <h4>{title}</h4>
        <p>{excerpt}</p>
      </div>
    </article>
  );
}
