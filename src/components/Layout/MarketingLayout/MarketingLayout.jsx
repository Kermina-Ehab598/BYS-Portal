import { Outlet } from "react-router-dom";
import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../SiteFooter/SiteFooter";

// Wraps every public marketing page (Home/About/Join/Impact/Faq) with the
// shared header + footer. The "site" class (global.css) applies the light
// theme scoped to this subtree only — the dark dashboard is untouched.
export default function MarketingLayout() {
  return (
    <div className="site" dir="rtl">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
