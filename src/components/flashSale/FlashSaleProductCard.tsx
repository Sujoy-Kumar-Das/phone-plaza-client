import { TProductItem } from "@/types";
import Image from "next/image";

export default function FlashSaleProductCard({ item }: { item: TProductItem }) {
  const { _id, productName, image, description, price, flashSale } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <Image
          src={image}
          alt={`${productName} image`}
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className={` ${flashSale ? "badge badge-secondary" : "hidden"}`}>
            {flashSale && "Flash Sale"}
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className=" btn btn-primary">Buy Now</button>
          <button className=" btn btn-secondary btn-outline">Detail</button>
        </div>
      </div>
    </div>
  );
}
