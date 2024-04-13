import FlashSaleGrid from "@/components/flashSale/FlashSaleGrid";
import FlashSaleHeading from "@/components/flashSale/FlashSaleHeading";
import Container from "@/components/shared/Container";

export default async function FlashSalePage() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <FlashSaleHeading />
      <FlashSaleGrid items={data.data} />
    </Container>
  );
}
