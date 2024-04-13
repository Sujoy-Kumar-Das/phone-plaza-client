import Link from "next/link";
import Container from "../shared/Container";
import FlashSaleGrid from "./FlashSaleGrid";
import FlashSaleHeading from "./FlashSaleHeading";

export default async function HomeFlashSaleItem() {
  const res = await fetch("http://localhost:5000/flash-sale?limit=8", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <Container>
      <FlashSaleHeading />
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
