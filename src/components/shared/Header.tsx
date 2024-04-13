import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

type THeader = {
  link?: string;
  children: string;
  text?: string;
};

export default function Header({ children, link, text }: THeader) {
  return (
    <div className=" flex justify-between items-center mb-8 flex-wrap lg:flex-nowrap">
      <div className=" text-start flex items-center gap-x-4  w-full">
        <h1 className=" text-3xl lg:text-5xl font-bold mb-3 text-textPrimary">
          {children}
        </h1>
        <p className=" w-1/12 h-1 bg-blue-600"></p>
      </div>
      {link && (
        <Link
          href={link}
          className=" btn btn-primary btn-md capitalize duration-500 hover:btn-secondary"
        >
          <span className=" capitalize">{text}</span>
          <span>
            <FaArrowAltCircleRight />
          </span>
        </Link>
      )}
    </div>
  );
}
