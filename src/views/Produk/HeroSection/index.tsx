import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Selamat Datang di Halaman Produk</h1>
        <p className={styles.heroSubtitle}>
          Temukan berbagai produk berkualitas dengan harga terbaik
        </p>
        <button className={styles.heroButton}>Jelajahi Produk</button>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.imagePlaceholder}>
          🛍️
        </div>
      </div>
    </section>
  );
}
