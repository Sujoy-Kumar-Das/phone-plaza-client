import { IHomeSliderItem } from "@/types/homeSliderItem";

export default function HomeSliderCard({ item }: { item: IHomeSliderItem }) {
  return (
    <div
      style={{
        background: `url(${item.image_url})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" w-1/2 mx-auto text-yellow-500">
        <h1 className=" text-6xl ">{item.product_name}</h1>
        <p className=" my-3">{item.description}</p>
      </div>
    </div>
  );
}
