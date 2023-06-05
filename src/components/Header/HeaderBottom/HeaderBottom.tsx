import React from "react";
import classNames from "classnames/bind";

import styles from "./HeaderBottom.module.scss";

const cx = classNames.bind(styles);

const HeaderBottom = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <img
        src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png"
        alt="logo"
      />
    </div>
  );
};

export default HeaderBottom;
