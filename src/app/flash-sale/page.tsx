import FlashSaleGrid from "@/components/flashSale/FlashSaleGrid";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default async function FlashSalePage() {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <Header heading="Flash Sale" subHeading="Stock is limited. Hurry up!" />
      <FlashSaleGrid items={data.data} />
    </Container>
  );
}
