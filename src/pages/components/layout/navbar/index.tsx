import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/produk" className={styles.homeButton}>
          <Image
            src="/home-button-white.svg"
            alt="Home"
            width={32}
            height={32}
          />
          <span>Home</span>
        </Link>
      </div>
      <div className={styles.navbarCenter}>
        <h1>Pemrograman Berbasis Framework - Praktikum</h1>
      </div>
    </div>
  );
}
