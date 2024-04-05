import { TCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ item }: { item: TCategory }) {
  const { name, image, description } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <Image src={image} alt={`${name} image`} width={300} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/categories/${name}`}>
            <button className="btn btn-primary">Show Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
