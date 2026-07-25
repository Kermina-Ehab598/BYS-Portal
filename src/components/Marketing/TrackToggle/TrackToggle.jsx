import styles from "./TrackToggle.module.css";

export default function TrackToggle({ options, activeId, onChange }) {
  return (
    <div className={styles.toggle}>
      {options.map((opt) => (
        <button
          key={opt.id}
          className={activeId === opt.id ? styles.active : ""}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
