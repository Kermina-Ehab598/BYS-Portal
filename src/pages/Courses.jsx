import { useState, useMemo } from "react";
import { useVolunteerAuth } from "../context/VolunteerAuthContext";
import CourseFilterBar from "../components/Courses/CourseFilterBar/CourseFilterBar";
import CourseCatalogCard from "../components/Courses/CourseCatalogCard/CourseCatalogCard";
import CourseDetailPanel from "../components/Courses/CourseDetailPanel/CourseDetailPanel";
import styles from "./Courses.module.css";
import PageBanner from "../components/Marketing/PageBanner/PageBanner";
import {
  COURSES_CATALOG,
  COURSE_DOMAINS,
  COURSE_LEVELS,
} from "../data/coursesCatalog";

export default function Courses() {
  const { identity } = useVolunteerAuth();
  const [domain, setDomain] = useState("الكل");
  const [level, setLevel] = useState("الكل");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filtered = useMemo(() => {
    return COURSES_CATALOG.filter((c) => {
      const matchesDomain = domain === "الكل" || c.domain === domain;
      const matchesLevel = level === "الكل" || c.level === level;
      const matchesSearch = c.title.includes(search.trim());
      return matchesDomain && matchesLevel && matchesSearch;
    });
  }, [domain, level, search]);

  const selectedCourse = COURSES_CATALOG.find((c) => c.id === selectedId);

  return (
    <main>
      <PageBanner crumb="الرئيسية / الكورسات " title="الكورسات" />
      <div className={styles.darkSection}>
        <div className="shell" dir="rtl">
          <div className={styles.lockBanner}>
            🔒 محتوى الكورسات الفعلي (المحاضرات والفيديوهات) يفتح فقط بعد تسجيل
            الدخول وقبول الطالب — قبل ذلك تظهر بطاقات معاينة فقط.
          </div>
        </div>

        <CourseFilterBar
          domains={COURSE_DOMAINS}
          levels={COURSE_LEVELS}
          activeDomain={domain}
          activeLevel={level}
          search={search}
          onDomainChange={setDomain}
          onLevelChange={setLevel}
          onSearchChange={setSearch}
        />

        <div className={styles.grid}>
          {filtered.map((course) => (
            <CourseCatalogCard
              key={course.id}
              course={course}
              isSelected={selectedId === course.id}
              onViewDetails={() =>
                setSelectedId(selectedId === course.id ? null : course.id)
              }
            />
          ))}

          {filtered.length === 0 && (
            <p className={styles.empty}>
              مفيش كورسات مطابقة للفلاتر دي حاليًا.
            </p>
          )}

          {selectedCourse && (
            <CourseDetailPanel
              course={selectedCourse}
              isUnlocked={Boolean(identity)}
            />
          )}
        </div>
      </div>
    </main>
  );
}
