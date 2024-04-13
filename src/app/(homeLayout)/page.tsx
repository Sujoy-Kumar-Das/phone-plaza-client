import AllProducts from "@/components/all-products/AllProducts";
import HomeCategory from "@/components/category/HomeCategory";
import HomeFlashSaleItem from "@/components/flashSale/FlashSale";
import HomeSlider from "@/components/home/HomeSlider";
import OptionCard from "@/components/optionsCard/OptionCard";

export default async function Home() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/hero-items", {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <main>
      <HomeSlider data={data.data} />
      <OptionCard />
      <HomeFlashSaleItem />
      <HomeCategory />
      <AllProducts />
    </main>
  );
}
