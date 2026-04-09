import styles from "@/styles/404.module.scss";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className={styles.error404}>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <img
        src="https://img.icons8.com/?size=100&id=wdfmax1DzcKx&format=png&color=40C057"
        alt="404"
      />
      <h1 className="font-bold text-[#3f3d56]">404</h1>
      <p className="font-medium text-[#3f3d56]">Page Not Found</p>
    </div>
  );
}
