import styles from "./GalleryGrid.module.css";

export default function GalleryGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
