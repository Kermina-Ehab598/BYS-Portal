import styles from "./CourseFilterBar.module.css";

export default function CourseFilterBar({
  domains,
  levels,
  activeDomain,
  activeLevel,
  search,
  onDomainChange,
  onLevelChange,
  onSearchChange,
}) {
  return (
    <div className={styles.bar}>
      <h3>تصفية</h3>

      <div className={styles.row}>
        <span className={styles.label}>المجال:</span>
        <div className={styles.pills}>
          {domains.map((d) => (
            <button
              key={d}
              className={activeDomain === d ? styles.active : ""}
              onClick={() => onDomainChange(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>المستوى:</span>
        <div className={styles.pills}>
          {levels.map((l) => (
            <button
              key={l}
              className={activeLevel === l ? styles.active : ""}
              onClick={() => onLevelChange(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <input
        type="text"
        className={styles.search}
        placeholder="ابحث عن كورس..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
