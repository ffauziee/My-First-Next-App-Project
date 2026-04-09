import TampilanProduk from "@/views/Produk";
import useSWR from "swr";

// export async function getStaticProps() {
// //   const res = await fetch("http://localhost:3000/api/produk");
// //   const { data: products } = await res.json();

// //   return {
// //     props: {
// //       products,
// //     },
// //     revalidate: 600, //10 menits
// //   };
// // }

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProdukPage({}) {
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return <TampilanProduk products={isLoading ? [] : data.data} />;
}
