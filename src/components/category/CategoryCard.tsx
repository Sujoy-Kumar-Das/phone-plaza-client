import { TCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CategoryCard({ item }: { item: TCategory }) {
  const { name, image, description } = item;

  // Function to truncate long descriptions
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl relative">
      <figure>
        <Image
          src={image}
          alt={`${name} image`}
          loading="lazy"
          placeholder="blur"
          blurDataURL="base64"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-textPrimary">{name}</h2>
        <p className="text-textSecondary text-left font-light description">
          {truncateDescription(description, 200)}{" "}
          {/* Adjust the number as needed */}
        </p>
        <div className="card-actions justify-start group overflow-hidden">
          <Link
            href={`/categories/${name}`}
            className="btn btn-primary overflow-hidden group-hover:bg-secondary duration-700 btn-sm"
          >
            <p className="-translate-x-20 group-hover:translate-x-12 duration-700 ease-in-out font-bold">
              <FaArrowRight />
            </p>
            <p className="-translate-x-3 group-hover:translate-x-36 duration-700">
              Show Products
            </p>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
