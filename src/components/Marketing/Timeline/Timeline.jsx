import styles from "./Timeline.module.css";

// this is a simple component that renders a timeline of events, given an array of 
// items with year, title, and description.
export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.date}>{item.year}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
