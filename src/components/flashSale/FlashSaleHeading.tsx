import Header from "../shared/Header";
import FlashSaleTimeEnd from "./FlashSaleTimeEnd";

export default function FlashSaleHeading() {
  return (
    <div className=" flex items-center justify-between flex-wrap lg:flex-nowrap">
      <Header>Flash Sale</Header>
      <FlashSaleTimeEnd />
    </div>
  );
}
