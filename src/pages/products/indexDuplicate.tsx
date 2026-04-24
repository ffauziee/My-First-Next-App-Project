import TampilanProduk from "@/views/Produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher";
import { ProductType } from "@/types/Product.type";

export default function ProdukPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { push } = useRouter();
  const { data, isLoading } = useSWR("/api/produk", fetcher);

  return <TampilanProduk products={isLoading ? [] : data || []} />;
}
