import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);
const Slider2 = () => {
  return (
    <div className={cx("slider2__wrapper")}>
      <img
        src="https://baby-shop-psi.vercel.app/images/babyshop-slider-pic1.webp"
        alt="img"
      />
      <div className={cx("content")}>
        <div className={cx("header")}>What's trending</div>
        <p>in 2022?</p>
        <button className={cx("slider1Btn")}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider2;
