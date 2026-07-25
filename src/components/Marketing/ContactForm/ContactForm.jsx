import { useState } from "react";
import styles from "./ContactForm.module.css";
import { submitContactMessage } from "../../../services/contactService";
import { isValidEmail } from "../../../utils/validators";

const EMPTY = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "اكتب اسمك";
    if (!isValidEmail(form.email)) next.email = "بريد إلكتروني غير صحيح";
    if (!form.message.trim()) next.message = "اكتب رسالتك";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitContactMessage(form);
    if (result.success) {
      setStatus("success");
      setForm(EMPTY);
    } else {
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.card}>
        <p className={styles.successMsg}>تم إرسال رسالتك بنجاح، هنتواصل معاك قريبًا 🎉</p>
        <button className={styles.linkBtn} onClick={() => setStatus("idle")}>
          إرسال رسالة تانية
        </button>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label>الاسم</label>
        <input
          type="text"
          placeholder="اكتب اسمك الكامل"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label>البريد الإلكتروني</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label>رسالتك</label>
        <textarea
          placeholder="اكتب رسالتك هنا..."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button className="btn btn-primary" type="submit" style={{ width: "100%" }} disabled={status === "submitting"}>
        {status === "submitting" ? "جاري الإرسال..." : "إرسال الرسالة"}
      </button>
    </form>
  );
}
