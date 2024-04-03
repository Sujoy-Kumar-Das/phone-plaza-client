import { ReactNode } from "react";

export default function Container({
  children,
  bgColor = true,
}: {
  children: ReactNode;
  bgColor?: boolean;
}) {
  return (
    <section className={`${bgColor ? "bg-gray-300" : "bg-white"}`}>
      <div className={`mx-auto max-w-7xl pb-10 pt-20 md:px-0 px-3`}>
        {children}
      </div>
    </section>
  );
}
