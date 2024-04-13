import Container from "../shared/Container";
import Header from "../shared/Header";
import CategorySlider from "./CategorySlider";

export default async function HomeCategory() {
  const res = await fetch("https://backend-rosy-chi.vercel.app/categories", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <Container bgColor={false}>
      <Header text="see all category" link="/categories">
        Categories
      </Header>

      {/* category items slider */}
      <CategorySlider items={data.data} />
    </Container>
  );
}
