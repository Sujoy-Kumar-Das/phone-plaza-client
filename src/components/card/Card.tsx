import { TProductItem } from "@/types";
import Image from "next/image";
import Rating from "../shared/Rating";

export default function Card({ item }: { item: TProductItem }) {
  const {
    _id,
    productName,
    image,
    flashSale,
    rating,
    flashSalePrice,
    originalPrice,
    discount,
  } = item;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className={`${discount ? "flex justify-end mt-5 me-5" : "hidden"}`}>
        <div className="badge badge-info p-3">Save ${discount}</div>
      </div>
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

        <Rating rating={rating} />
        <div className=" flex items-center w-1/3">
          <p className={`${discount && "line-through"}`}>${originalPrice}</p>
          <p className={`${discount ? "block" : "hidden"}`}>-</p>
          <p className={`${discount ? "block" : "hidden"}`}>
            ${flashSalePrice}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className=" btn btn-primary">Buy Now</button>
          <button className=" btn btn-secondary btn-outline">Detail</button>
        </div>
      </div>
    </div>
  );
}
