import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1 className="text-center text-4xl font-bold tracking-wide text-red-600 my-5">{title}</h1>;
};

export default Header;
