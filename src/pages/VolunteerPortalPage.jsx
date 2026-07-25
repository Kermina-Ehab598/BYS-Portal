import { Navigate } from "react-router-dom";
import { useVolunteerAuth } from "../context/VolunteerAuthContext";
import AlertBanner from "../components/AlertBanner/AlertBanner";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import TasksCard from "../components/TasksCard/TasksCard";
import OnboardingCard from "../components/OnboardingCard/OnboardingCard";
import ResourcesCard from "../components/ResourcesCard/ResourcesCard";
import ContactLeadCard from "../components/ContactLeadCard/ContactLeadCard";
import styles from "./VolunteerPortalPage.module.css";
import PageBanner from "../components/Marketing/PageBanner/PageBanner";
// SiteHeader/SiteFooter come from MarketingLayout (this page is nested
// under it in AppRoutes.jsx) — no separate header lives here anymore.
export default function VolunteerPortalPage() {
  const { identity, logout } = useVolunteerAuth();

  // مفيش هوية محفوظة (محدش عمل "دخول") → نرجّعه لصفحة الدخول
  if (!identity) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main>
      <PageBanner crumb="الرئيسية / لوحة المتطوعين" title="لوحة المتطوعين" />
      <div className={`shell ${styles.page}`} dir="rtl">
        <div className={styles.topRow}>
          <div>
            <h1
              className="card-heading"
              style={{ fontSize: 24, marginBottom: 4 }}
            >
              بوابة المتطوعين
            </h1>
            <p className="card-sub" style={{ marginBottom: 0 }}>
              تابع مهامك، خطوات التوجيه، والموارد المتاحة لك كمتطوع.
            </p>
          </div>
          <button className={styles.logoutBtn} onClick={logout}>
            تسجيل الخروج
          </button>
        </div>

        <AlertBanner />
        <WelcomeCard
          volunteerName={identity.name}
          volunteerRole={identity.role}
        />

        <div className={styles.grid}>
          <TasksCard />
          <OnboardingCard />
        </div>

        <ResourcesCard />
        <ContactLeadCard />
      </div>
    </main>
  );
}
