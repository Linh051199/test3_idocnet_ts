import React from "react";
import classNames from "classnames/bind";

import styles from "./HeaderFixed.module.scss";
import images from "../../../assets/images";
import { Link } from "react-router-dom";
import HeaderNav from "../HeaderNav/HeaderNav";

const cx = classNames.bind(styles);

interface IProps {
  active: string;
}
const HeaderFixed: React.FC<IProps> = (props) => {
  const { active } = props;
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop.png"
          alt="img"
        />
        <HeaderNav active={active} />
      </div>
    </div>
  );
};

export default HeaderFixed;
