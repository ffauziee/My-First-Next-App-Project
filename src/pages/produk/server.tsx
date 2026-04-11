import TampilanProduk from "@/views/Produk"; "swr";
import { ProductType } from "@/types/Product.type";

export default function halamanProdukServer(prop: { products: ProductType[] }) {
  const { products } = prop;

  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <h1 className="mt-8 text-3xl font-bold text-center text-green-500">
        Halaman Produk Server
      </h1>
      <TampilanProduk products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
