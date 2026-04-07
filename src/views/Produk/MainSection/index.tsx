import Link from "next/link";
import styles from "./MainSection.module.scss";
import { useEffect, useState } from "react";

type product = {
  id: number;
  name: string;
  price: number;
  category: string;
  ukuran: string;
  warna: string;
};

export default function MainSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Daftar Produk</h2>

        <div className={styles.productGrid}>
          {products.map((product: product) => (
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
                <p className={styles.productDescription}>
                  Ukuran: {product.ukuran} | Warna: {product.warna}
                </p>
                <p className={styles.productPrice}>Rp.{product.price.toLocaleString("id-ID")}</p>
                <button className={styles.productButton}>Lihat Detail</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
