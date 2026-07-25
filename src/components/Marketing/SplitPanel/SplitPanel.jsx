import styles from "./SplitPanel.module.css";

export default function SplitPanel({ eyebrow, title, children }) {
  return (
    <div className={styles.panel}>
      <div className="eyebrow">
        <span className="node"></span>
        {eyebrow}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
