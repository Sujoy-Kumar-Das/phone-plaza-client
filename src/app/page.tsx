import HomeSlider from "@/components/HomeSlider";
import HomeFlashSaleItem from "@/components/flashSale/FlashSale";

export default async function Home() {
  const res = await fetch("http://localhost:5000/hero-items", {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <main>
      <HomeSlider data={data.data} />
      <HomeFlashSaleItem />
    </main>
  );
}
