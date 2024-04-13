import { TCategory } from "@/types";
import Grid from "../shared/Grid";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid({ items }: { items: TCategory[] }) {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <CategoryCard item={item} key={item._id} />
      ))}
    </div>
  );
}
