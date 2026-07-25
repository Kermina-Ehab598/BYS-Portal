import styles from "./CourseCatalogCard.module.css";

export default function CourseCatalogCard({
  course,
  isSelected,
  onViewDetails,
}) {
  return (
    <div className={`${styles.card} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.thumb}>صورة الكورس</div>
      <h4>{course.title}</h4>
      <div className={styles.meta}>
        <span>{course.level}</span>
        <span>·</span>
        <span>{course.duration}</span>
        <span>·</span>
        <span>{course.instructor}</span>
      </div>
      <button className={styles.detailsBtn} onClick={onViewDetails}>
        {isSelected ? "إخفاء التفاصيل" : "عرض التفاصيل"}
      </button>
    </div>
  );
}
