import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderBottom />
      <HeaderNav />
    </div>
  );
};

export default Header;
