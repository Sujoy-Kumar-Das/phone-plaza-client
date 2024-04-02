import Link from "next/link";

export const navLinks = (
  <>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/categories"}>Categories</Link>
    </li>
    <li>
      <Link href={"/products"}>Products</Link>
    </li>
    <li>
      <Link href={"/flash-sale"}>Flash Sale</Link>
    </li>
    <li>
      <Link href={"/about-us"}>About Us</Link>
    </li>
    <li>
      <Link href={"/contact-us"}>Contact Us</Link>
    </li>
  </>
);
