import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProductType } from "@/types/Product.type"; 

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/produk" className={styles.homeButton}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/apple-home.png"
            alt="home"
          />
        </Link>
      </div>
      <div className={styles.navbarCenter}>
        <h1>Pemrograman Berbasis Framework - Praktikum</h1>
      </div>
    </div>
  );
}
