import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "../shared/Container";
import Header from "../shared/Header";
import AllProductSwiper from "./AllProductSwiper";
import Link from "next/link";

export default async function AllProducts() {
  const res = await fetch("http://localhost:5000/products?limit=6", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  return (
    <Container>
      <div className=" flex justify-between items-center">
        <Header>Trending Products</Header>
        <Link
          href={"/products"}
          className=" btn btn-outline btn-primary btn-md capitalize"
        >
          <span>See all products</span>{" "}
          <span>
            <FaArrowAltCircleRight />
          </span>
        </Link>
      </div>
      <AllProductSwiper items={data.data} />
    </Container>
  );
}
