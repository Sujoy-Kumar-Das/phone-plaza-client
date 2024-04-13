import Header from "../shared/Header";
import FlashSaleTimeEnd from "./FlashSaleTimeEnd";

export default function FlashSaleHeading() {
  return (
    <div className=" flex items-center justify-between flex-wrap lg:flex-nowrap">
      <div className=" w-full lg:w-3/5">
        <Header>Flash Sale</Header>
      </div>
      <FlashSaleTimeEnd />
    </div>
  );
}
