import { TProductItem } from "@/types";
import TrendingCard from "../card/TrendingCard";
import Grid from "../shared/Grid";

export default function AllProductsGrid({ items }: { items: TProductItem[] }) {
  return (
    <Grid>
      {items.map((item: TProductItem) => (
        <TrendingCard item={item} key={item._id} />
      ))}
    </Grid>
  );
}
