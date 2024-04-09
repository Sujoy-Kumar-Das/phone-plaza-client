import React from "react";

type THeader = {
  children: string;
};

const Header: React.FC<THeader> = ({ children }) => {
  return (
    <div className=" text-start flex items-center gap-x-4 mb-8 w-full">
      <h1 className="text-5xl font-bold mb-3 text-textPrimary">{children}</h1>
      <p className=" w-1/12 h-1 bg-blue-600"></p>
    </div>
  );
};

export default Header;
