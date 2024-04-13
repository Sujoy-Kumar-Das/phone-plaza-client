import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Button({ link, text }: { link: string; text: string }) {
  return (
    <Link
      href={link}
      className=" btn btn-primary btn-md capitalize duration-500 hover:btn-secondary"
    >
      <span className=" capitalize">{text}</span>
      <span>
        <FaArrowAltCircleRight />
      </span>
    </Link>
  );
}
