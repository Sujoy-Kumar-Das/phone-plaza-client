import Link from "next/link";

export default function OptionCategoryCard() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
      <h2 className="text-xl font-semibold mb-2 text-blue-500">
        Mobile Phones
      </h2>
      <p className="text-gray-700">
        Explore our wide range of mobile phones, including the latest models
        from top brands.
      </p>
      <div className="mt-4 flex justify-end">
        <Link href={"/categories"} className="btn btn-primary btn-md">
          View Phones
        </Link>
      </div>
    </div>
  );
}
