import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";

const cx = classNames.bind(styles);

interface IProps {
  active: string;
}

const Header: React.FC<IProps> = (props) => {
  const { active } = props;
  return (
    <div className={cx("header__wrapper")}>
      <HeaderTop />
      <HeaderBottom />
      <HeaderNav active={active} />
    </div>
  );
};

export default Header;
