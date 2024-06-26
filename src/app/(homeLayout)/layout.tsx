import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Plaza",
  description:
    "Discover a vast array of mobile devices and accessories at Phone Plaza, your premier online destination for top-quality smartphones and tablets. Explore our competitively priced inventory and find the perfect device to stay connected. Shop conveniently and securely for the latest in mobile technology, all in one place",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
