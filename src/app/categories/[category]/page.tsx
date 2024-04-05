import FlashSaleGrid from "@/components/flashSale/FlashSaleGrid";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default async function ProductCategory({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  console.log(category);
  const res = await fetch(
    `http://localhost:5000/categories?category=${category}`,
    {
      next: {
        revalidate: 1,
      },
    }
  );
  const data = await res.json();
  return (
    <Container>
      <Header
        heading="Categories"
        subHeading="Explore Our Diverse Range of Categories"
      />

      <FlashSaleGrid items={data.data} />
    </Container>
  );
}