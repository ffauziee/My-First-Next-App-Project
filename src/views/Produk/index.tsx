import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import { ProductType } from "@/types/Product.type";

export default function TampilanProduk({ products }: { products: ProductType[] }) {
  return (
    <div>
      <HeroSection />
      <MainSection products={products} />
    </div>
  );
}
