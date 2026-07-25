import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SiteHeader.module.css";
import { NAV_LINKS } from "../../../data/navLinks";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.mark}></span> BYS
        </NavLink>

        <button
          className={styles.toggle}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? styles.current : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? styles.current : "")}
          >
            دخول المتطوعين
          </NavLink>
          <NavLink
            to="/join"
            onClick={() => setOpen(false)}
            className={styles.cta}
          >
            سجّل الآن
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
