import PageBanner from "../components/Marketing/PageBanner/PageBanner";
import SplitPanel from "../components/Marketing/SplitPanel/SplitPanel";
import GoalItem from "../components/Marketing/GoalItem/GoalItem";
import ValueCard from "../components/Marketing/ValueCard/ValueCard";
import styles from "./About.module.css";
import { GOALS } from "../data/goals";
import { VALUES } from "../data/values";

export default function About() {
  return (
    <main>
      <PageBanner crumb="الرئيسية / من نحن" title="من نحن" />

      <section className="section">
        <div className="container">
          <div className={styles.split}>
            <SplitPanel eyebrow="رؤيتنا" title="مجتمع تعليمي لا يتوقف عند حدود القاعة">
              نتطلّع إلى أن تكون "BYS" الجسر الذي يربط بين رغبة الطلاب في التعلّم وقدرة المتطوعين على
              العطاء، لنصنع معاً جيلاً قادراً على التعلّم الذاتي والعمل الجماعي.
            </SplitPanel>
            <SplitPanel eyebrow="رسالتنا" title="تعليم مجاني، بمعايير احترافية">
              نقدّم كورسات مجانية يشرف عليها متطوعون متخصصون، ونمنح كل متطوع مساحة حقيقية لبناء
              مهاراته القيادية والتقنية من خلال مهام فعلية داخل الفريق.
            </SplitPanel>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>خارطة الطريق
          </div>
          <div className="section-head">
            <h2>أهدافنا</h2>
          </div>
          <ul className={styles.goalsList}>
            {GOALS.map((g) => (
              <GoalItem key={g.id} num={g.num} title={g.title} description={g.description} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>ما يحكمنا
          </div>
          <div className="section-head">
            <h2>قيمنا</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <ValueCard key={v.id} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
