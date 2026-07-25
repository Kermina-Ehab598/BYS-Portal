import { useState } from "react";
import styles from "./JoinForm.module.css";
import { GOVERNORATES } from "../../../data/governorates";
import { COURSES } from "../../../data/courses";
import { submitApplication } from "../../../services/applicationService";
import {
  isValidFullName,
  isValidEmail,
  isValidEgyptianPhone,
  isValidNationalId,
  isValidOptionalUrl,
  isValidImageFile,
  isValidCvFile,
  isValidFileSize,
} from "../../../utils/validators";

const EMPTY_FORM = {
  fullName: "",
  email: "",
  phone: "",
  nationalId: "",
  governorate: "",
  district: "",
  college: "",
  university: "",
  facebook: "",
  linkedin: "",
  skills: "",
  experience: "",
  desiredCourse: "",
};

export default function ApplicationForm() {
  const [applicantType, setApplicantType] = useState(null); // "volunteer" | "student"
  const [form, setForm] = useState(EMPTY_FORM);
  const [files, setFiles] = useState({ idFront: null, idBack: null, cv: null });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function updateFile(field, file) {
    setFiles((prev) => ({ ...prev, [field]: file }));
  }

  function validate() {
    const next = {};

    if (!isValidFullName(form.fullName)) {
      next.fullName = "من فضلك اكتب الاسم رباعي (4 كلمات على الأقل)";
    }
    if (!isValidEgyptianPhone(form.phone)) {
      next.phone = "رقم هاتف غير صحيح (مثال: 01012345678)";
    }
    if (!isValidNationalId(form.nationalId)) {
      next.nationalId = "الرقم القومي لازم يكون 14 رقم";
    }
    if (!form.governorate) {
      next.governorate = "اختر المحافظة";
    }
    if (!form.college.trim()) {
      next.college = "اكتب اسم الكلية";
    }
    if (!form.university.trim()) {
      next.university = "اكتب اسم الجامعة";
    }

    if (applicantType === "volunteer") {
      if (!isValidEmail(form.email)) {
        next.email = "بريد إلكتروني غير صحيح";
      }
      if (!form.district.trim()) {
        next.district = "اكتب الحي";
      }
      if (!isValidOptionalUrl(form.facebook)) {
        next.facebook = "رابط فيسبوك غير صحيح";
      }
      if (!isValidOptionalUrl(form.linkedin)) {
        next.linkedin = "رابط لينكدإن غير صحيح";
      }
      if (!isValidImageFile(files.idFront) || !isValidFileSize(files.idFront)) {
        next.idFront = "ارفع صورة (jpg/png) بحجم أقل من 5MB";
      }
      if (!isValidImageFile(files.idBack) || !isValidFileSize(files.idBack)) {
        next.idBack = "ارفع صورة (jpg/png) بحجم أقل من 5MB";
      }
      if (!isValidCvFile(files.cv) || !isValidFileSize(files.cv)) {
        next.cv = "ارفع ملف PDF أو Word بحجم أقل من 5MB";
      }
    }

    if (applicantType === "student") {
      if (!form.desiredCourse) {
        next.desiredCourse = "اختر الكورس اللي عايزه";
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const payload = new FormData();
    payload.append("applicantType", applicantType);
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    if (applicantType === "volunteer") {
      payload.append("idFront", files.idFront);
      payload.append("idBack", files.idBack);
      payload.append("cv", files.cv);
    }

    const result = await submitApplication(payload);
    setStatus(result.success ? "success" : "error");
  }

  function resetForm() {
    setApplicantType(null);
    setForm(EMPTY_FORM);
    setFiles({ idFront: null, idBack: null, cv: null });
    setErrors({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div className={styles.successBox}>
        <h2 className="card-heading">تم إرسال طلبك بنجاح 🎉</h2>
        <p className="card-sub">
          هيتم مراجعة طلبك يدويًا من فريق المبادرة، وهيتم التواصل معاك قريبًا.
        </p>
        <button className={styles.secondaryBtn} onClick={resetForm}>
          إرسال طلب جديد
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* اختيار نوع المتقدم */}
      <div className={styles.typeToggle}>
        <button
          type="button"
          className={`${styles.typeBtn} ${applicantType === "volunteer" ? styles.typeBtnActive : ""}`}
          onClick={() => setApplicantType("volunteer")}
        >
          أتقدّم كمتطوع
        </button>
        <button
          type="button"
          className={`${styles.typeBtn} ${applicantType === "student" ? styles.typeBtnActive : ""}`}
          onClick={() => setApplicantType("student")}
        >
          أتقدّم كطالب لحضور كورس
        </button>
      </div>

      {applicantType && (
        <>
          {/* الحقول المشتركة */}
          <div className={styles.grid}>
            <Field label="الاسم رباعي" error={errors.fullName}>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
              />
            </Field>

            <Field label="رقم الهاتف" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+20"
              />
            </Field>

            <Field label="الرقم القومي" error={errors.nationalId}>
              <input
                type="text"
                value={form.nationalId}
                onChange={(e) => updateField("nationalId", e.target.value)}
                placeholder="14 رقم"
                maxLength={14}
              />
            </Field>

            <Field label="المحافظة" error={errors.governorate}>
              <select
                value={form.governorate}
                onChange={(e) => updateField("governorate", e.target.value)}
              >
                <option value="">اختر المحافظة</option>
                {GOVERNORATES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </Field>

            {applicantType === "volunteer" && (
              <Field label="الحي" error={errors.district}>
                <input
                  type="text"
                  value={form.district}
                  onChange={(e) => updateField("district", e.target.value)}
                />
              </Field>
            )}

            <Field label="الكلية" error={errors.college}>
              <input
                type="text"
                value={form.college}
                onChange={(e) => updateField("college", e.target.value)}
              />
            </Field>

            <Field label="الجامعة" error={errors.university}>
              <input
                type="text"
                value={form.university}
                onChange={(e) => updateField("university", e.target.value)}
              />
            </Field>
          </div>

          {/* حقول المتطوع فقط */}
          {applicantType === "volunteer" && (
            <>
              <div className={styles.sectionDivider}>
                بيانات التواصل والملفات
              </div>
              <div className={styles.grid}>
                <Field label="البريد الإلكتروني" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </Field>

                <Field label="رابط فيسبوك (اختياري)" error={errors.facebook}>
                  <input
                    type="url"
                    value={form.facebook}
                    onChange={(e) => updateField("facebook", e.target.value)}
                    placeholder="https://facebook.com/..."
                  />
                </Field>

                <Field label="رابط لينكدإن (اختياري)" error={errors.linkedin}>
                  <input
                    type="url"
                    value={form.linkedin}
                    onChange={(e) => updateField("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                  />
                </Field>
              </div>

              <div className={styles.grid}>
                <FileField
                  label="صورة البطاقة (أمام)"
                  error={errors.idFront}
                  file={files.idFront}
                  onChange={(f) => updateFile("idFront", f)}
                  accept="image/png, image/jpeg"
                />
                <FileField
                  label="صورة البطاقة (خلف)"
                  error={errors.idBack}
                  file={files.idBack}
                  onChange={(f) => updateFile("idBack", f)}
                  accept="image/png, image/jpeg"
                />
                <FileField
                  label="السيرة الذاتية (CV)"
                  error={errors.cv}
                  file={files.cv}
                  onChange={(f) => updateFile("cv", f)}
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <div className={styles.grid}>
                <Field label="المهارات (معاك كورسات إيه؟)">
                  <textarea
                    rows={3}
                    value={form.skills}
                    onChange={(e) => updateField("skills", e.target.value)}
                  />
                </Field>
                <Field label="الخبرات (اشتغلت فين وعملت إيه؟)">
                  <textarea
                    rows={3}
                    value={form.experience}
                    onChange={(e) => updateField("experience", e.target.value)}
                  />
                </Field>
              </div>
            </>
          )}

          {/* حقل الطالب فقط */}
          {applicantType === "student" && (
            <div className={styles.grid}>
              <Field label="الكورس اللي عايزه" error={errors.desiredCourse}>
                <select
                  value={form.desiredCourse}
                  onChange={(e) => updateField("desiredCourse", e.target.value)}
                >
                  <option value="">اختر الكورس</option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          )}

          {status === "error" && (
            <p className={styles.errorBanner}>
              حصل خطأ أثناء الإرسال، حاول تاني كمان شوية.
            </p>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "جاري الإرسال..." : "إرسال الطلب"}
          </button>
        </>
      )}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      {children}
      {error && <span className={styles.errorText}>{error}</span>}
    </label>
  );
}

function FileField({ label, error, file, onChange, accept }) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <span className={styles.fileInput}>
        <span className={styles.fileName}>
          {file ? file.name : "اختر ملف..."}
        </span>
        <input
          type="file"
          accept={accept}
          onChange={(e) => onChange(e.target.files[0] || null)}
        />
      </span>
      {error && <span className={styles.errorText}>{error}</span>}
    </label>
  );
}
