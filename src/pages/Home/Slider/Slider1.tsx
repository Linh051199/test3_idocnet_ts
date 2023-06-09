import React from "react";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);

function Slider1() {
  return (
    <div className={cx("slider1__wrapper")}>
      <img
        src="https://baby-shop-psi.vercel.app/images/babyshop-slider-pic1.webp"
        alt="img"
      />

      <div className={cx("content")}>
        <div className={cx("header")}>Collection</div>
        <h2>Autumn-Winter</h2>
        <p>2021</p>
        <button className={cx("slider1Btn")}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Slider1;
