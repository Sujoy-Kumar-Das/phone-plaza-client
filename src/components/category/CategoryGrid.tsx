import { TCategory } from "@/types";
import Grid from "../shared/Grid";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid({ items }: { items: TCategory[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <CategoryCard item={item} key={item._id} />
      ))}
    </Grid>
  );
}
