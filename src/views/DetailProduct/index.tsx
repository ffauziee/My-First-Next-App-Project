import { ProductType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";

export default function DetailProduct({ product }: { product?: ProductType }) {
  if (!product) {
    return <div>No product data available</div>;
  }

  if (
    !product.image ||
    !product.name ||
    !product.category ||
    product.price === undefined
  ) {
    return <div>Invalid product data</div>;
  }

  return (
    <>
      <h1 className={styles.productDetail_title}>Detail Product</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail_image}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productDetail_info}>
          <h1 className={styles.productDetail_info_name}>{product.name}</h1>
          <p className={styles.productDetail_info_category}>
            {product.category}
          </p>
          <p className={styles.productDetail_info_price}>
            Price: Rp.{product.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
}
