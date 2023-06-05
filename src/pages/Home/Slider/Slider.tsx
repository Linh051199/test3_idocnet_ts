import React from "react";
import classnames from "classnames/bind";
import styles from "./Slider.module.scss";

const cx = classnames.bind(styles);

const Slider = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("body")}>
        <div className={cx("slider")}>
          <img
            src="https://baby-shop-psi.vercel.app/images/babyshop-slider-pic1.webp"
            alt="img"
          />
        </div>
        <div className={cx("sub")}>
          <div className={cx("sub__top")}>
            <div className={cx("sub__topTitle")}>
              <p>
                Select your <br /> child’s age
              </p>
              <span></span>
            </div>
            <div className={cx("sub__topAge")}>
              <div className={cx("sub__topAgeItem")}>0 - 2</div>
              <div className={cx("sub__topAgeItem")}>2 - 4</div>
              <div className={cx("sub__topAgeItem")}>4 - 6</div>
            </div>
          </div>
          <div className={cx("sub__bottom")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-pic1.webp"
              alt="img"
            />
            <p>Duvet Cover Set</p>
            <span>-40% off</span>
          </div>
        </div>
      </div>
      <div className={cx("navList")}>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
        <div className={cx("navList__item")}>
          <span>Bed Sets</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
