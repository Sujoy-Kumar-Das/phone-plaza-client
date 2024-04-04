import { TProductItem } from "@/types";
import Grid from "../shared/Grid";
import Card from "../card/Card";

export default function AllProductsGrid({ items }: { items: TProductItem[] }) {
  return (
    <Grid>
      {items.map((item: TProductItem) => (
        <Card key={item._id} item={item} />
      ))}
    </Grid>
  );
}
