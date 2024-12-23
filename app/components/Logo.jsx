import Image from "next/image";
import React from "react";
const logo = "/assets/images/logo.svg";

const Logo = () => {
  return <Image src={logo} alt="logo" width={37} height={28} />;
};

export default Logo;
