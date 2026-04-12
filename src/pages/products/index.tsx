import TampilanProduk from "@/views/Produk";
import { ProductType } from "@/types/Product.type";

export default function halamanProdukServer({
  products,
}: {
  products: ProductType[];
}) {
  return <TampilanProduk products={products || []} />;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  return {
    props: {
      products: response.data || [],
    },
  };
}
