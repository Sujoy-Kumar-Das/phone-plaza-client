import Container from "@/components/shared/Container";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId: id } = params;
  const res = await fetch(`https://backend-rosy-chi.vercel.app/products/${id}`);
  const data = await res.json();

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
    description,
  } = data.data;
  return (
    <Container bgColor={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  pb-8">
        <div className="col-span-1">
          <Image
            placeholder="blur"
            blurDataURL="base64"
            src={image}
            alt={productName}
            width={800}
            height={800}
          />
        </div>
        <div className="col-span-1">
          <h1 className=" text-3xl lg:text-5xl font-bold mb-4 ">
            {productName}
          </h1>
          <p className=" text-textSecondary text-2xl lg:text-3xl mb-4 font-semibold">
            ${originalPrice}
          </p>
          <p className=" text-textSecondary font-light mb-4">{description}</p>

          <div className=" flex items-center justify-start gap-x-5">
            <div className=" flex gap-x-3 items-center justify-start">
              <input
                type="text"
                name="quantity"
                className="w-10 h-10 border border-base-100 rounded-lg ring ring-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className=" bg-base-100 w-10 h-10 flex flex-col justify-center items-center rounded-lg border-base-100 p-2 ">
                <p className=" text-2xl font-extrabold pt-3">
                  <IoIosArrowUp />
                </p>
                <p className=" text-2xl font-extrabold pb-3">
                  <IoIosArrowDown />
                </p>
              </div>
            </div>

            <button className="btn btn-primary">Add to Cart</button>
          </div>

          <div className=" flex justify-start items-center gap-x-2 mt-4 ">
            <p className=" text-xl font-bold">
              <FaRegHeart />
            </p>
            <p className=" text-xl font-semibold capitalize">Add to wishlist</p>
          </div>
          <div className=" mt-8">
            <p className="text-textSecondary mb-2">Brand: {brand}</p>

            {flashSale && (
              <>
                <p className="text-textSecondary mb-2">
                  Flash Sale Price: ${flashSalePrice}
                </p>
                <p className="text-textSecondary mb-2">Discount: {discount}%</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
