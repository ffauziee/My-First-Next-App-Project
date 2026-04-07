import Image from "next/image";
import styles from "./About.module.scss";

export default function AboutView() {
  return (
    <div className={styles.about}>
      <Image
        src="/aboutPage.svg"
        alt="Profile Illustration"
        width={200}
        height={200}
        className={styles.image}
      />

      <h1 className={styles.title}>About Page</h1>

      <p className={styles.description}>
        This is the About page for studying Next.js.
      </p>

      <div className={styles.card}>
        <p>
          <strong>Name:</strong> Fauzie Ikhlasul Amnur
        </p>
        <p>
          <strong>Mata Kuliah:</strong> Pemrograman Besbasis Framework
        </p>
      </div>
    </div>
  );
}
