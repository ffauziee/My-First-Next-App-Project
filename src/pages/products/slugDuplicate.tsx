import { useRouter } from "next/router";

export default function HalamanProduk() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Produk : {router.query.id}</p>
    </div>
  );
}
