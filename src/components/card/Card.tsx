import { TProductItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import Ratting from "../shared/Rating";

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
    brand,
  } = item;

  return (
    <div className="card bg-base-100 shadow-xl relative group overflow-hidden ">
      <div
        className={` flex self-end m-2 ${
          flashSale ? "badge badge-primary" : "badge badge-secondary"
        }`}
      >
        {flashSale ? "Flash Sale" : "Premium"}
      </div>
      <figure>
        <Image
          src={image}
          alt={`${productName} image`}
          width={200}
          height={200}
        />
      </figure>
      <div className="bg-base-200 pb-1 rounded-b-lg group overflow-hidden ">
        {/* card body div */}
        <div className="card-body text-center pt-3 group-hover:-translate-y-[500px] translate-y-0 duration-700 ease-in-out">
          <h2 className="text-textPrimary font-light">{brand}</h2>
          <h2 className="text-textSecondary font-bold">{productName}</h2>
          <div className="flex items-center justify-center gap-2 w-1/4 mx-auto">
            <p className={`${discount && "line-through"}`}>${originalPrice}</p>
            <p className={`${discount ? "block" : "hidden"}`}>-</p>
            <p className={`${discount ? "block" : "hidden"}`}>
              ${flashSalePrice}
            </p>
          </div>
        </div>
      </div>

      {/* card action div */}
      <div className="flex justify-center items-center rounded-b-lg  translate-y-96 group-hover:translate-y-24 duration-700 ease-in-out absolute inset-0 opacity-0 group-hover:opacity-100 ">
        <div>
          <div className="flex justify-between items-center gap-4 mb-3">
            <p className="text-textPrimary hover:text-primary text-textPrimary text-2xl hover:scale-150 duration-700">
              <FaRegHeart />
            </p>
            <button className="btn btn-primary btn-sm btn-outline group2">
              Add to cart
            </button>
            <Link
              href={`/products/${_id}`}
              className="text-textPrimary hover:text-primary text-2xl hover:scale-150 duration-700"
            >
              <FaRegEye />
            </Link>
          </div>
          <div className="flex justify-center">
            <Ratting rating={rating} />
          </div>
        </div>
      </div>
    </div>
  );
}
