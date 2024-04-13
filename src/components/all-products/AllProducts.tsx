import Container from "../shared/Container";
import Header from "../shared/Header";
import AllProductSwiper from "./AllProductSwiper";

export default async function AllProducts() {
  const res = await fetch("http://localhost:5000/products?limit=6", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <Container>
      <Header link="/products" text="see all products">
        Trending Products
      </Header>
      <AllProductSwiper items={data.data} />
    </Container>
  );
}
