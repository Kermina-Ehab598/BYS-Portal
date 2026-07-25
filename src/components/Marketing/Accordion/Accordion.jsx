import { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.css";

// Only one item open at a time — matches the original behavior, but instead
// of measuring scrollHeight in JS, this uses a CSS grid-template-rows
// 0fr -> 1fr transition, which animates height without any JS measuring.
export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.q}
          answer={item.a}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
