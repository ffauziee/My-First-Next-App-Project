import Head from "next/head";
import AboutView from "@/views/About";

export default function About() {
  return (
    <>
      {/* Judul Halaman */}
      <Head>
        <title>About - Fauzie Ikhlasul Amnur</title>
        <meta
          name="description"
          content="Profil mahasiswa D4 Teknik Informatika"
        />
      </Head>

      <AboutView />
    </>
  );
}
