import Container from "@/components/shared/Container";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId: id } = params;
  const res = await fetch(`http://localhost:5000/products/${id}`);
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
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
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
          <h1 className="text-2xl font-bold mb-4">{productName}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-gray-700 mb-4">Brand: {brand}</p>
          <p className="text-gray-700 mb-4">Original Price: ${originalPrice}</p>
          {flashSale && (
            <>
              <p className="text-gray-700 mb-4">
                Flash Sale Price: ${flashSalePrice}
              </p>
              <p className="text-gray-700 mb-4">Discount: {discount}%</p>
            </>
          )}
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </Container>
  );
}
