import CardShell from "../CardShell/CardShell";
import styles from "./ContactLeadCard.module.css";

export default function ContactLeadCard({
  leadName = " شيماء مدبولي",
  leadRole = "منسّق المتطوعين — فريق BYS",
  whatsappUrl = "https://wa.me/000000000000",
  email = "volunteers@bys.example.com",
}) {
  const initials = leadName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join(" ");

  return (
    <CardShell badge="CONTACT LEAD" accent="wine">
      <h2 className="card-heading">تواصل مع مسؤول الفريق</h2>
      <p className="card-sub">للتواصل المباشر بخصوص مهامك أو أي استفسار</p>
      <div className={styles.row}>
        <div className={styles.person}>
          <div className={styles.avatar}>{initials}</div>
          <div>
            <p className={styles.name}>{leadName}</p>
            <p className={styles.role}>{leadRole}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <a
            className={`${styles.btn} ${styles.btnPrimary}`}
            href={whatsappUrl}
          >
            واتساب
          </a>
          <a
            className={`${styles.btn} ${styles.btnGhost}`}
            href={`mailto:${email}`}
          >
            البريد الإلكتروني
          </a>
        </div>
      </div>
    </CardShell>
  );
}
