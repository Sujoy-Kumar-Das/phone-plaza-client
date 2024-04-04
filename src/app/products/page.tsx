import AllProductsGrid from "@/components/all-products/AllProductsGrid";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default async function Products() {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <Header
        heading="Trending Products"
        subHeading="Discover the Latest and Most Popular Smartphone Models"
      />

      <AllProductsGrid items={data.data} />
    </Container>
  );
}
