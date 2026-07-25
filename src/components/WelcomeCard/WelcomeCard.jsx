import CardShell from "../CardShell/CardShell";
import styles from "./WelcomeCard.module.css";

export default function WelcomeCard({
  volunteerName = "سارة عبد الرحمن",
  volunteerRole = "منسّقة تواصل ميداني",
}) {
  const initials = volunteerName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <CardShell badge="WELCOME">
      <div className={styles.row}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.copy}>
          <h2 className="card-heading">مرحباً بك، {volunteerName} 👋</h2>
          <p className={styles.text}>
            سعداء بانضمامك إلى فريق BYS، نتمنى لك تجربة مثمرة معنا.
          </p>
          <span className={styles.rolePill}>دورك: {volunteerRole}</span>
        </div>
      </div>
    </CardShell>
  );
}
