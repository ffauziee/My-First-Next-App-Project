import { useEffect, useState } from "react";
import styles from "./Produk.module.scss";

type product = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

export default function TampilanProduk() {
  const [products, setProducts] = useState<product[]>([]);

  const fetchProducts = () => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.produk}>
      {products.length > 0 ? (
        <div className={styles.produk_content}>
          {products.map((product) => (
            <div key={product.id} className={styles.produk_content_item}>
              <img src={product.image} alt={product.name} width={200} />
              <h2 className={styles.produk_content_item_name}>
                {product.name}
              </h2>
              <p className={styles.produk_content_item_price}>
                Rp. {product.price.toLocaleString("id-ID")}
              </p>
              <p className={styles.produk_content_item_category}>
                {product.category}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.produk_content_skeleton}>
          <div className={styles.produk_content_skeleton_image}></div>
          <div className={styles.produk_content_skeleton_category}></div>
          <div className={styles.produk_content_skeleton_name}></div>
          <div className={styles.produk_content_skeleton_price}></div>
        </div>
      )}
    </div>
  );
}
