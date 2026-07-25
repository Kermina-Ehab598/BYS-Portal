import { useState, useMemo } from "react";
import CardShell from "../CardShell/CardShell";
import styles from "./OnboardingCard.module.css";
import { ONBOARDING_STEPS } from "../../data/onboardingSteps";

export default function OnboardingCard() {
  const [checked, setChecked] = useState({});

  const progress = useMemo(() => {
    const done = ONBOARDING_STEPS.filter((s) => checked[s.id]).length;
    return Math.round((done / ONBOARDING_STEPS.length) * 100);
  }, [checked]);

  function toggleStep(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <CardShell badge="ONBOARDING">
      <h2 className="card-heading">خطوات التوجيه</h2>
      <p className="card-sub">أكمل الخطوات التالية لإنهاء عملية التأهيل</p>

      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${progress}%` }} />
      </div>

      <div>
        {ONBOARDING_STEPS.map((s) => (
          <div
            className={`${styles.step} ${checked[s.id] ? styles.done : ""}`}
            key={s.id}
            onClick={() => toggleStep(s.id)}
          >
            <span className={`${styles.box} ${checked[s.id] ? styles.checked : ""}`}>
              {checked[s.id] ? "✓" : ""}
            </span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </CardShell>
  );
}
