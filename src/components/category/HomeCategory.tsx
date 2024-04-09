import Container from "../shared/Container";
import Header from "../shared/Header";
import CategoryGrid from "./CategoryGrid";

export default async function HomeCategory() {
  const res = await fetch("http://localhost:5000/categories", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <Container bgColor={false}>
      <Header>Categories</Header>

      {/* category items gird */}

      <CategoryGrid items={data.data} />
    </Container>
  );
}
