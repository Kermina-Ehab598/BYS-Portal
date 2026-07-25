import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { VOLUNTEER_ROLES } from "../../../data/volunteerRoles";
import { useVolunteerAuth } from "../../../context/VolunteerAuthContext";

export default function LoginForm() {
  const { login } = useVolunteerAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState(VOLUNTEER_ROLES[0]);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("اكتب اسمك عشان نكمل");
      return;
    }
    login(name.trim(), role);
    navigate("/volunteer");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label>الاسم</label>
        <input
          type="text"
          placeholder="اكتب اسمك"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>

      <div className={styles.field}>
        <label for="your-role">دورك في الفريق</label>
        <select
          id="your-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {VOLUNTEER_ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        دخول
      </button>
    </form>
  );
}
