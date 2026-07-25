import PageBanner from "../components/Marketing/PageBanner/PageBanner";
import StatCard from "../components/Marketing/StatCard/StatCard";
import Timeline from "../components/Marketing/Timeline/Timeline";
import GalleryGrid from "../components/Marketing/GalleryGrid/GalleryGrid";
import TestimonialCard from "../components/Marketing/TestimonialCard/TestimonialCard";
import styles from "./Impact.module.css";
import { STATS } from "../data/stats";
import { TIMELINE } from "../data/timeline";
import { GALLERY } from "../data/gallery";
import { TESTIMONIALS } from "../data/testimonials";

export default function Impact() {
  return (
    <main>
      <PageBanner
        crumb="الرئيسية / إنجازاتنا"
        title="إنجازاتنا"
        description='لمحة سريعة عن الأثر الذي بنيناه معاً منذ انطلاق "BYS" — بالأرقام، بالمحطات، وبالصوت المباشر من طلابنا ومتطوعينا.'
      />

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>بالأرقام
          </div>
          <div className="section-head">
            <h2>إحصائيات سريعة</h2>
            <p>مؤشرات مختصرة تلخّص حجم المجتمع الذي نبنيه سوياً.</p>
          </div>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <StatCard key={s.id} num={s.num} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>مسيرتنا
          </div>
          <div className="section-head">
            <h2>أبرز المحطات</h2>
            <p>محطات مفصلية شكّلت مسار المبادرة منذ يومها الأول.</p>
          </div>
          <Timeline items={TIMELINE} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>لحظات موثّقة
          </div>
          <div className="section-head">
            <h2>معرض الصور</h2>
            <p>لقطات من الكورسات وورش العمل وفعاليات الفريق.</p>
          </div>
          <GalleryGrid items={GALLERY} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>آراؤهم
          </div>
          <div className="section-head">
            <h2>ماذا يقول طلابنا ومتطوعونا</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                initial={t.initial}
                name={t.name}
                role={t.role}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
