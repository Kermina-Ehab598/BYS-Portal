export default function PageBanner({ crumb, title, description }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="crumb">{crumb}</div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
