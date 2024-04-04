import Link from "next/link";
import Container from "../shared/Container";
import Header from "../shared/Header";
import AllProductsGrid from "./AllProductsGrid";

export default async function AllProducts() {
  const res = await fetch("http://localhost:5000/products?limit=6", {
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

      <div className=" flex justify-center mt-10">
        <Link href={"/products"}>
          <button className=" btn btn-primary btn-md">See All</button>
        </Link>
      </div>
    </Container>
  );
}
