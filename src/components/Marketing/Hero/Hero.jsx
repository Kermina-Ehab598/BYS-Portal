import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className="eyebrow">
          <span className="node"></span>مبادرة تعليمية · تطوعية
        </div>
        <h1 className={styles.title}>
          نبني المهارة <span className={styles.accent}>ونبني الأثر</span>، خطوة
          بخطوة
        </h1>
        <p className={styles.lead}>
          "BYS" مبادرة تجمع بين طلاب طموحين يريدون التعلّم، ومتطوعين لديهم خبرة
          يريدون العطاء — عبر كورسات مجانية وفريق عمل حقيقي.
        </p>
        <div className={styles.actions}>
          <Link to="/join" className="btn btn-primary">
            انضم كطالب
          </Link>
          <a
            href="#courses-preview"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("courses-preview")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            تعرّف على الكورسات
          </a>
        </div>
      </div>
    </section>
  );
}
