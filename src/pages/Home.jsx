import { Link } from "react-router-dom";
import Hero from "../components/Marketing/Hero/Hero";
import NewsCard from "../components/Marketing/NewsCard/NewsCard";
import CourseCard from "../components/Marketing/CourseCard/CourseCard";
import CtaBand from "../components/Marketing/CtaBand/CtaBand";
import ContactForm from "../components/Marketing/ContactForm/ContactForm";
import cta from "../components/Marketing/CtaBand/CtaBand.module.css";
import styles from "./Home.module.css";
import { NEWS } from "../data/news";
import { COURSES_PREVIEW } from "../data/coursesPreview";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>آخر التحديثات
          </div>
          <div className="section-head">
            <h2>أحدث وأهم الأخبار</h2>
            <p>كل جديد عن فعاليات المبادرة، الدفعات الجديدة، وأخبار الفريق.</p>
          </div>
          <div className={styles.newsGrid}>
            {NEWS.map((n) => (
              <NewsCard key={n.id} date={n.date} title={n.title} excerpt={n.excerpt} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="مكانك عندنا موجود" description='اختر المسار المناسب لك وابدأ رحلتك مع "BYS" اليوم.'>
        <Link to="/join" className={`${cta.trackBtn} ${cta.trackBtnStudent}`}>
          سجّل كطالب
          <small>تعلّم مجاناً مع فريقنا</small>
        </Link>
        <Link to="/join" className={`${cta.trackBtn} ${cta.trackBtnVolunteer}`}>
          سجّل كمتطوع
          <small>شارك خبرتك وابنِ أثراً</small>
        </Link>
      </CtaBand>

      <section className="section section-alt" id="courses-preview">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>الكورسات المجانية
          </div>
          <div className="section-head">
            <h2>لمحة عن الكورسات</h2>
            <p>مجموعة كورسات يقدّمها فريقنا مباشرة، تُفتح للطلاب بعد قبول التسجيل.</p>
          </div>
          <div className={styles.coursesGrid}>
            {COURSES_PREVIEW.map((c) => (
              <CourseCard key={c.id} level={c.level} title={c.title} description={c.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="eyebrow">
            <span className="node"></span>لنا معاً حديث
          </div>
          <div className="section-head">
            <h2>تواصل معنا</h2>
            <p>لأي استفسار عن الكورسات أو التطوع، فريقنا جاهز للرد.</p>
          </div>
          <div className={styles.contactWrap}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
