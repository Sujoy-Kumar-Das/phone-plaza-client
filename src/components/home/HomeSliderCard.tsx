import { IHomeSliderItem } from "@/types/homeSliderItem";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeSliderCard({
  item,
  index,
  sliderIndex,
}: {
  item: IHomeSliderItem;
  index: number;
  sliderIndex: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    if (sliderIndex === index) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [sliderIndex, index, controls]);

  return (
    <div className="flex justify-center lg:justify-start items-center flex-wrap-reverse h-[80vh] max-w-7xl mx-auto overflow-hidden">
      <motion.div
        className="w-full lg:w-1/2 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl text-primary font-bold">{item.product_name}</h1>
        <p className="font-semibold text-textPrimary my-5">
          {item.product_name}
        </p>
        <Link href={"/"} className="btn btn-outline btn-primary btn-sm">
          Shop now
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 1.3 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src={item.image_url}
            width={500}
            height={500}
            style={{ height: "auto", width: "auto" }}
            alt={`${item.product_name} image`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
