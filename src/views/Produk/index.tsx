import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

type ProductType = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

export default function TampilanProduk({ products }: { products: ProductType[] }) {
  return (
    <div>
      <HeroSection />
      <MainSection products={products} />
    </div>
  );
}
