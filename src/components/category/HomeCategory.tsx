import Container from "../shared/Container";
import Header from "../shared/Header";
import CategoryGrid from "./CategoryGrid";

export default async function HomeCategory() {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();

  return (
    <Container bgColor={false}>
      <Header
        heading="Categories"
        subHeading="Explore Our Diverse Range of Categories"
      />

      {/* category items gird */}

      <CategoryGrid items={data.data} />
    </Container>
  );
}
