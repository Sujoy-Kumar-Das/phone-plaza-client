import { TProductItem } from "@/types";
import FlashSaleProductCard from "./FlashSaleProductCard";

export default function FlashSaleGrid({ items }: { items: TProductItem[] }) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item: TProductItem) => (
        <FlashSaleProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}
