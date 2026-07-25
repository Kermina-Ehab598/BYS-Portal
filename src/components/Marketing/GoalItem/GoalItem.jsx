import styles from "./GoalItem.module.css";

export default function GoalItem({ num, title, description }) {
  return (
    <li className={styles.item}>
      <span className={styles.num}>{num}</span>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}
