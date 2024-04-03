import React from "react";

type THeader = {
  heading: string;
  subHeading: string;
};

const Header: React.FC<THeader> = ({ heading, subHeading }) => {
  return (
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-3">{heading}</h1>
      <h3 className="text-lg text-gray-600 mb-10">{subHeading}</h3>
    </div>
  );
};

export default Header;
