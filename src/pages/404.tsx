import styles from "@/styles/404.module.scss";
import Image from "next/image";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className={styles.error404}>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Image
        src="/notFound.svg"
        alt="Page Not Found"
        width={400}
        height={400}
        className={styles.error404_image}
      />
      <h1 className="font-bold text-[#3f3d56]">404</h1>
      <p className="font-medium text-[#3f3d56]">Page Not Found</p>
    </div>
  );
}
