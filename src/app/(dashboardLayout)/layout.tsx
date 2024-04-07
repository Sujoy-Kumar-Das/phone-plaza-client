import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | PhonePlaza",
  description:
    "Discover a vast array of mobile devices and accessories at Phone Plaza, your premier online destination for top-quality smartphones and tablets. Explore our competitively priced inventory and find the perfect device to stay connected. Shop conveniently and securely for the latest in mobile technology, all in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className}`}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className=" bg-base-300 py-3 px-1 flex justify-between lg:hidden max-w-7xl mx-auto">
              <label htmlFor="my-drawer-2" className=" drawer-button ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </label>
              <p className="font-bold text-lg ">MobilePlaza</p>
            </div>
            <div className="  ps-0 lg:ps-5">{children}</div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <Link href={"/dashboard/all-products"}>All Products</Link>
              </li>
              <li>
                <Link href={"/"}>Create Product</Link>
              </li>
              <li>
                <Link href={"/"} className=" btn btn-primary btn-sm">
                  {" "}
                  Back To Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
