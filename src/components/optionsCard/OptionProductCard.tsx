import Link from "next/link";

export default function OptionProductCard() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
      <h2 className="text-xl font-semibold mb-2 text-blue-500">
        Latest Smartphone
      </h2>
      <p className="text-gray-700">
        Discover the latest smartphones with cutting-edge features and stunning
        designs.
      </p>
      <div className="mt-4 flex justify-end">
        <Link href={"/products"} className="btn btn-primary btn-md">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
