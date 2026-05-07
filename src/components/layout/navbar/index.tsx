import styles from "./navbar.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const { data } = useSession();
  const { push } = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/produk" className={styles.homeButton}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/apple-home.png"
            alt="home"
          />
        </Link>
      </div>
      <div className={styles.navbarCenter}>
        <h1>Pemrograman Berbasis Framework - Praktikum</h1>
      </div>
      <div className={styles.navbarRight}>
        <p className="text-sm mr-2">Hi, {data?.user?.fullname}</p>
        {data ? (
          <button onClick={handleSignOut} className={styles.buttonSignOut}>
            Sign Out
          </button>
        ) : (
          <button onClick={() => signIn()} className={styles.buttonSignIn}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
