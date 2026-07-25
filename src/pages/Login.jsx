import LoginForm from "../components/Forms/LoginForm/LoginForm";
import styles from "./Login.module.css";
import PageBanner from "../components/Marketing/PageBanner/PageBanner";

export default function Login() {
  return (
    <main>
      <PageBanner crumb="الرئيسية / تسجيل الدخول" title="تسجيل الدخول" />
      <div className={styles.darkSection}>
        <div className={styles.wrap} dir="rtl">
          {/* تسجيب دخول مؤقت مش حقيقي */}

          <LoginForm />
        </div>
      </div>
    </main>
  );
}
