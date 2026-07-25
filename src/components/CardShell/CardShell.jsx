import Badge from "../Badge/Badge";
import styles from "./CardShell.module.css";

// this is a simple component that renders a card shell with a badge and some styling.

export default function CardShell({ badge, accent = "default", children }) {
  const accentClass = accent === "wine" ? styles.wineAccent : "";

  return (
    <section className={`${styles.card} ${accentClass}`}>
      <Badge>{badge}</Badge>
      {children}
    </section>
  );
}
