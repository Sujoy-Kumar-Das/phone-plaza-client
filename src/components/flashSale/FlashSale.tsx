import Link from "next/link";
import Container from "../shared/Container";
import Header from "../shared/Header";
import FlashSaleGrid from "./FlashSaleGrid";

export default async function HomeFlashSaleItem() {
  const res = await fetch("http://localhost:5000/flash-sale?limit=6", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <Header
        heading="Flash Sale"
        subHeading="Quick Flash Sale for Gadgets on the Go!"
      />

      {/* flash sale grid for new six flash sale items */}
      <FlashSaleGrid items={data.data} />

      <div className=" flex justify-center mt-10">
        <Link href={"/flash-sale"}>
          <button className=" btn btn-primary btn-md">See All</button>
        </Link>
      </div>
    </Container>
  );
}
