"use-client";
import { IHomeSliderItem } from "@/types/homeSliderItem";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeSliderCard({ item }: { item: IHomeSliderItem }) {
  return (
    <div className="flex justify-center lg:justify-start items-center flex-wrap-reverse h-[80vh] max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2 text-center">
        <h1 className="text-5xl text-primary font-bold">{item.product_name}</h1>
        <p className="font-semibold text-textPrimary my-5">
          {item.product_name}
        </p>
        <Link href={"/"} className="btn btn-outline btn-primary btn-sm">
          Shop now
        </Link>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 1.2 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full lg:w-1/2"
      >
        <Image
          src={item.image_url}
          width={500}
          height={500}
          alt={`${item.product_name} image`}
        />
      </motion.div>
    </div>
  );
}
