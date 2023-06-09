import React from "react";
import classNames from "classnames/bind";

import styles from "./Special.module.scss";

const cx = classNames.bind(styles);
const SpecialSlider1 = () => {
  return (
    <div className={cx("slider1__wrapper")}>
      <img
        src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-bebear.webp"
        alt="alt"
      />
      <p>Win a big</p>
      <div className={cx("gift__name")}>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-beteddybear.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default SpecialSlider1;
