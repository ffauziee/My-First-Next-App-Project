import Link from "next/link";
import styles from "./MainSection.module.scss";
import { useEffect, useState } from "react";
import { MdRefresh, MdHourglassEmpty } from "react-icons/md";
import { useRouter } from "next/router";

type product = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

export default function MainSection() {
  const [isLogin, setIsLogin] = useState(false);
  const {push} = useRouter();
  
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("default");

  const fetchProducts = () => {
    setLoading(true);
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/produk");
        const responsedata = await response.json();
        if (isMounted) {
          setProducts(responsedata.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  // get kategori dari produk
  const getUniqueCategories = () => {
    const categories = ["All Products"];
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories;
  };

  // Filter produk berdasarkan kategori
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sort produk
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        {/* Filter Kategori */}
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
              onClick={fetchProducts}
              disabled={loading}
              className={`${styles.refreshButton} ${loading ? styles.rotating : ""}`}
              title="Refresh Data"
            >
              {loading ? (
                <MdHourglassEmpty size={100} />
              ) : (
                <MdRefresh size={100} />
              )}
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {sortedProducts.map((product: product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <button className={styles.addToCartBadge}>✓ Add to Cart</button>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>
                  {product.category}
                </span>
                <Link href={`/produk/${product.id}`}>
                  <h3 className={styles.productName}>{product.name}</h3>
                </Link>
                <p className={styles.productDescription}>
                  {/* Size: {product.size} */}
                </p>
                <p className={styles.productPrice}>
                  Rp. {product.price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
