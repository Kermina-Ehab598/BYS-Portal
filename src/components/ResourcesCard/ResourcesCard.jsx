import CardShell from "../CardShell/CardShell";
import styles from "./ResourcesCard.module.css";
import { RESOURCES } from "../../data/resources";

// this is a simple component that renders a card with a list of resources for volunteers.
//  Each resource has a label, meta information, and an arrow indicating it can be clicked
//  (though no click handler is implemented here).
export default function ResourcesCard() {
  return (
    <CardShell badge="RESOURCES">
      <h2 className="card-heading">ملفات وموارد المتطوع</h2>
      <p className="card-sub">ملفات تصميم، سكربتات، ومستندات إرشادية</p>
      <div className={styles.list}>
        {RESOURCES.map((r) => (
          <div className={styles.item} key={r.id}>
            <div>
              <div className={styles.name}>{r.label}</div>
              <div className={styles.meta}>{r.meta}</div>
            </div>
            <span className={styles.arrow}>←</span>
          </div>
        ))}
      </div>
    </CardShell>
  );
}
