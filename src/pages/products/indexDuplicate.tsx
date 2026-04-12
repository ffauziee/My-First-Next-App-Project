import TampilanProduk from "@/views/Produk";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";

export default function ProdukPage({}) {
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return <TampilanProduk products={isLoading ? [] : data || []} />;
}