import React from "react";
import classNames from "classnames/bind";

import styles from "./Special.module.scss";
import SpecialSlider1 from "./SpecialSlider1";
import SpecialSlider2 from "./SpecialSlider2";

const cx = classNames.bind(styles);

const Special: React.FC = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("left")}>
          <div className={cx("left__title")}>limited offer</div>
          <div className={cx("left__percent")}>-50%</div>
          <div className={cx("left__sale")}>
            Holiday <br /> Sale
          </div>
          <div className={cx("left__clock")}>
            <div className={cx("left__clockItem")}>
              <div className={cx("left__clockItemNum")}>204</div>
              <p>days</p>
              <span></span>
            </div>
            <div className={cx("left__clockItem")}>
              <div className={cx("left__clockItemNum")}>19</div>
              <p>hours</p>
              <span></span>
            </div>
            <div className={cx("left__clockItem")}>
              <div className={cx("left__clockItemNum")}>07</div>
              <p>minutes</p>
              <span></span>
            </div>
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("right__header")}>
            <p>USE DISCOUNTS AND PROMOTIONS</p>
            <div className={cx("right__headerHighlight")}>
              Special <span>Offers</span>
            </div>
          </div>
          <div className={cx("right__carousel")}>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <SpecialSlider1 />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <SpecialSlider2 />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
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
                data-bs-target="#carouselExampleDark"
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
        </div>
      </div>
    </div>
  );
};

export default Special;
