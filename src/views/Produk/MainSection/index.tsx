import Link from "next/link";
import styles from "./MainSection.module.scss";

const products = [
  {
    id: 1,
    name: "Laptop Gaming",
    price: "Rp 15.000.000",
    category: "Elektronik",
  },
  { id: 2, name: "Smartphone", price: "Rp 5.000.000", category: "Elektronik" },
  {
    id: 3,
    name: "Headphone Wireless",
    price: "Rp 1.500.000",
    category: "Audio",
  },
  {
    id: 4,
    name: "Keyboard Mechanical",
    price: "Rp 1.200.000",
    category: "Aksesoris",
  },
  { id: 5, name: "Mouse Gaming", price: "Rp 800.000", category: "Aksesoris" },
  { id: 6, name: "Monitor 4K", price: "Rp 6.500.000", category: "Elektronik" },
];

export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Produk Terpopuler</h2>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/produk/${product.id}`}
              className={styles.productCard}
            >
              <div className={styles.productImage}>
                <span className={styles.productEmoji}>📦</span>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>
                  {product.category}
                </span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
                <button className={styles.productButton}>Lihat Detail</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
