import CategoryGrid from "@/components/category/CategoryGrid";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default async function Categories() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/categories", {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <Container>
      <Header>Categories</Header>

      {/* category items gird */}
      <CategoryGrid items={data.data} />
    </Container>
  );
}
