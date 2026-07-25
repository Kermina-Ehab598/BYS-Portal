import styles from "./Accordion.module.css";

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.question}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {question}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
          ▾
        </span>
      </button>
      <div
        className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ""}`}
      >
        <div className={styles.answerInner}>{answer}</div>
      </div>
    </div>
  );
}
