import CardShell from "../CardShell/CardShell";
import styles from "./TasksCard.module.css";
import { TASKS, STATUS_MAP } from "../../data/tasks";

// this is a simple component that renders a card with a list of tasks for volunteers.
//  Each task has a title, status, and due date. The status is displayed as a colored chip
//  (though no click handler is implemented here).
export default function TasksCard() {
  return (
    <CardShell badge="TASKS">
      <h2 className="card-heading">المهام الحالية</h2>
      <p className="card-sub">العنوان · الحالة · الموعد النهائي</p>
      <div>
        {TASKS.map((t) => (
          <div className={styles.row} key={t.id}>
            <span className={styles.title}>{t.title}</span>
            <span
              className={`${styles.chip} ${styles[STATUS_MAP[t.status].className]}`}
            >
              {STATUS_MAP[t.status].label}
            </span>
            <span className={styles.due}>{t.due}</span>
          </div>
        ))}
      </div>
    </CardShell>
  );
}
