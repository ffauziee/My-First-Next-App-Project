import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Katalog Products
        </h1>
        <p className={styles.heroSubtitle}>
          JobSheet Pemrograman Framework - Next.js Routing
        </p>
      </div>
    </section>
  );
}
