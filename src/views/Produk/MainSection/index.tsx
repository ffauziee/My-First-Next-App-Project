/* eslint-disable @next/next/no-img-element */
import styles from "./Produk.module.scss";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
import { useState } from "react";
import { ProductType } from "@/types/Product.type";
import Link from "next/link";

type ApiResponse = {
  status: boolean;
  status_code: number;
  data: ProductType[];
};

export default function TampilanProduk({ products }: { products: ProductType[] }) {
  const { mutate, error } = useSWR<ApiResponse>("/api/produk", fetcher);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

  if (error) {
    return <div>Error loading products</div>;
  }

  const handleRefresh = async () => {
    setIsLoading(true);
    mutate(undefined, true);
    setIsLoading(false);
  };

  const getUniqueCategories = () => {
    const categories = ["All Products"];
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories;
  };

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section className={styles.mainSection}>
      <div>
        <div className={styles.filterContainer}>
          <div className={styles.categoryFilter}>
            {getUniqueCategories().map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort & Filter Options */}
          <div className={styles.sortFilterContainer}>
            <div className={styles.sortGroup}>
              <label htmlFor="sortBy">Sort By</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
            <button
              onClick={handleRefresh}
              className={`${styles.refreshButton} ${isLoading ? styles.rotating : ""}`}
              title="Refresh Data"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/40C057/refresh--v1.png"
                alt="refresh--v1"
              />
            </button>
          </div>
        </div>
        <div className={styles.produk}>
          {products.length > 0 ? (
            <div className={styles.produk_grid}>
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={styles.produk_grid_item_produkContainer}
                >
                  <div key={product.id} className={styles.produk_grid_item}>
                    <div className={styles.produk_grid_item_image}>
                      <img
                        className={styles.produk_grid_item_image}
                        src={product.image}
                        alt={product.name}
                        width={200}
                      />
                      <button
                        className={`${styles.produk_grid_item_addToCart} text-sm`}
                      >
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/material-rounded/24/40C057/shopping-cart.png"
                          alt="cart-icon"
                        />
                        Add to Cart
                      </button>
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <h2 className={styles.produk_grid_item_name}>
                        {product.name}
                      </h2>
                    </Link>
                    <p className={styles.produk_grid_item_category}>
                      {product.category}
                    </p>
                    <p className={styles.produk_grid_item_price}>
                      Rp.{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.produk_grid}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={styles.produk_grid_skeleton}>
                  <div className={styles.produk_grid_skeleton_image}></div>
                  <div className={styles.produk_grid_skeleton_name}></div>
                  <div className={styles.produk_grid_skeleton_category}></div>
                  <div className={styles.produk_grid_skeleton_price}></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
