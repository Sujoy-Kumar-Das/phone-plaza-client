import Container from "../shared/Container";
import Header from "../shared/Header";
import Button from "../ui/Button";
import CategorySlider from "./CategorySlider";

export default async function HomeCategory() {
  const res = await fetch("http://localhost:5000/categories", {
    cache: "no-store",
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
