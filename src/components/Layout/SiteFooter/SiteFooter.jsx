import { Link } from "react-router-dom";
import styles from "./SiteFooter.module.css";
import { NAV_LINKS } from "../../../data/navLinks";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              <span className={styles.mark}></span> BYS
            </div>
            <p>
              مبادرة تعليمية وتطوعية تجمع الطلاب بالمتطوعين لبناء مهارات حقيقية
              وأثر مستدام.
            </p>
          </div>

          <div>
            <h4>روابط سريعة</h4>
            <div className={styles.flinks}>
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4>تواصل</h4>
            <div className={styles.flinks}>
              <a href="mailto:BYS@BYS.com">BYS@BYS.com</a>
              <a href="tel:01000000000">01000000000</a>
              <span>الإسكندرية، مصر</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>© 2023 مبادرة BYS — جميع الحقوق محفوظة</span>
          <div className={styles.socials}>
            <a href="#" aria-label="فيسبوك">
              f
            </a>
            <a href="#" aria-label="لينكدإن">
              in
            </a>
            <a href="#" aria-label="إنستجرام">
              ig
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
