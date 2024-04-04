import CategoryGrid from "@/components/category/CategoryGrid";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default async function Categories() {
  const res = await fetch("http://localhost:5000/categories", {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <Container>
      <Header
        heading="Categories"
        subHeading="Explore Our Diverse Range of Categories"
      />

      {/* category items gird */}

      <CategoryGrid items={data.data} />
    </Container>
  );
}
