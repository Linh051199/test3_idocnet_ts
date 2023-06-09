import React from "react";
import classNames from "classnames/bind";

import styles from "./Special.module.scss";

const cx = classNames.bind(styles);
const SpecialSlider2 = () => {
  return (
    <div className={cx("slider2__wrapper")}>
      <img
        src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-giftcart.webp"
        alt="alt"
      />
      <p>Gift card with benefits</p>
      <div className={cx("gift__name")}>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-befriends.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default SpecialSlider2;
