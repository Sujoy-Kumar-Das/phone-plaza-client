import { TProductItem } from "@/types";
import Card from "../card/Card";
import Grid from "../shared/Grid";

export default function FlashSaleGrid({ items }: { items: TProductItem[] }) {
  return (
    <Grid>
      {items.map((item: TProductItem) => (
        <Card key={item._id} item={item} />
      ))}
    </Grid>
  );
}
