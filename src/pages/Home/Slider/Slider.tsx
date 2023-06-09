import React from "react";
import classnames from "classnames/bind";
import styles from "./Slider.module.scss";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";

const cx = classnames.bind(styles);

const Slider = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("body")}>
          <div className={cx("slider")}>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item ">
                  <Slider1 />
                </div>
                <div className="carousel-item active">
                  <Slider2 />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
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
    </div>
  );
};

export default Slider;
