import { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/Marketing/PageBanner/PageBanner";
import TrackToggle from "../components/Marketing/TrackToggle/TrackToggle";
import Accordion from "../components/Marketing/Accordion/Accordion";
import CtaBand from "../components/Marketing/CtaBand/CtaBand";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "../data/faq";

export default function Faq() {
  const [category, setCategory] = useState("student");

  return (
    <main>
      <PageBanner crumb="الرئيسية / الأسئلة الشائعة" title="الأسئلة الشائعة" />

      <section className="section">
        <div className="container">
          <TrackToggle options={FAQ_CATEGORIES} activeId={category} onChange={setCategory} />

          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <Accordion items={FAQ_ITEMS[category]} />
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBand title="لم تجد إجابتك؟" description="فريقنا جاهز للرد على أي استفسار إضافي لديك.">
            <Link to="/#contact" className="btn btn-primary">
              تواصل معنا
            </Link>
          </CtaBand>
        </div>
      </section>
    </main>
  );
}
