import styles from "./Badge.module.css";

// this is a simple component that renders a badge (a small label) with some styling.
//  It takes children as props and displays them inside a span with the badge class.
export default function Badge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}
