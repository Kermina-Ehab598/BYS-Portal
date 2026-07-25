import { Link } from "react-router-dom";
import styles from "./CourseDetailPanel.module.css";

export default function CourseDetailPanel({ course, isUnlocked }) {
  return (
    <div className={styles.panel}>
      <h3>تفاصيل الكورس: {course.title}</h3>
      <p className={styles.description}>{course.description}</p>

      {!isUnlocked && (
        <div className={styles.lockNotice}>
          🔒 قائمة المحاضرات الكاملة تفتح بعد تسجيل الدخول وقبول التسجيل في
          الكورس.
          <Link to="/login" className={styles.lockLink}>
            سجّل للوصول
          </Link>
        </div>
      )}

      <div className={styles.lectureList}>
        {course.lectures.map((lecture, index) => (
          <div
            key={lecture.id}
            className={`${styles.lecture} ${!isUnlocked ? styles.locked : ""}`}
          >
            <span className={styles.lectureNum}>{index + 1}</span>
            <span className={styles.lectureTitle}>{lecture.title}</span>
            <span className={styles.lectureIcon}>
              {isUnlocked ? "▶" : "🔒"}
            </span>
          </div>
        ))}
      </div>

      {isUnlocked && (
        <div className={styles.progressRow}>
          <span className={styles.progressLabel}>نسبة التقدّم</span>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: "0%" }} />
          </div>
        </div>
      )}
    </div>
  );
}
