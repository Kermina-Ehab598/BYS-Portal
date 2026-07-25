import PageBanner from "../components/Marketing/PageBanner/PageBanner";
import JoinForm from "../components/Marketing/JoinForm/JoinForm";
// src\components\Marketing\JoinForm\JoinForm.jsx

export default function Join() {
  return (
    <main>
      <PageBanner crumb="الرئيسية / انضم لنا" title="انضم لنا" />
      <section className="section">
        <div className="container">
          <JoinForm />
        </div>
      </section>
    </main>
  );
}
