import { createContext, useContext, useEffect, useState } from "react";

// ⚠️ ده مش نظام تسجيل دخول حقيقي — مفيش باسورد، مفيش سيرفر، مفيش تحقق من
// هوية حد. هو بس شكل تجربة استخدام: بياخد اسم ودور من المستخدم ويحفظهم في
// localStorage عشان تفضل باقي في المتصفح، وباقي الصفحات (زي بوابة المتطوع)
// تستخدمهم بدل الأسماء الثابتة. لما يتحط Backend حقيقي (Firebase مثلاً)،
// login() هنا هي المكان الوحيد اللي هيتغيّر.

const VolunteerAuthContext = createContext(null);
const STORAGE_KEY = "bys_volunteer_identity";

export function VolunteerAuthProvider({ children }) {
  const [identity, setIdentity] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (identity) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(identity));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // localStorage ممكن يكون متمنوع (وضع تصفح خاص مثلاً) — نتجاهل بهدوء
    }
  }, [identity]);

  function login(name, role) {
    setIdentity({ name, role });
  }

  function logout() {
    setIdentity(null);
  }

  return (
    <VolunteerAuthContext.Provider value={{ identity, login, logout }}>
      {children}
    </VolunteerAuthContext.Provider>
  );
}

export function useVolunteerAuth() {
  const ctx = useContext(VolunteerAuthContext);
  if (!ctx) {
    throw new Error("useVolunteerAuth لازم يتستخدم جوه VolunteerAuthProvider");
  }
  return ctx;
}
