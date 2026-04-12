// import { useRouter } from "next/router";
// import fetcher from "@/utils/swr/fetcher";
// import useSWR from "swr";
import DetailProduk from "@/views/DetailProduct";
import { ProductType } from "@/types/Product.type";

// export default function HalamanProduk() {
//   //   const router = useRouter();
//   //   console.log(router);
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR(
//     `/api/produk/${query.product}`,
//     fetcher,
//   );

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading product</div>;
//   if (!data) return <div>Product not found</div>;

//   return <DetailProduk product={isLoading ? [] : data} />;
// }

export default function HalamanProduk({ product }: { product?: ProductType }) {
  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data || null,
    },
  };
}
