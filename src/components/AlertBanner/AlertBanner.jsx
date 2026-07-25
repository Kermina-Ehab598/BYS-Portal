import styles from "./AlertBanner.module.css";

export default function AlertBanner() {
  return (
    <div className={styles.alert}>
      <span className={styles.icon}>⚠️</span>
      <span>
        تظهر هذه اللوحة فقط بعد <b>تسجيل الدخول</b> و<b>قبول انضمام المتطوع</b>. قبل إتمام
        هاتين الخطوتين، يُعرض للمتطوع رسالة "بانتظار المراجعة" بدلاً من هذه الصفحة.
      </span>
    </div>
  );
}
