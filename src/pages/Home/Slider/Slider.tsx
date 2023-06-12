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
                <div className="carousel-item active">
                  <Slider1 />
                </div>
                <div className="carousel-item ">
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
                <a href="#">
                  <span>
                    0 <i className="fa-solid fa-minus"></i> 2
                  </span>
                </a>
                <a href="#">
                  <span>
                    2 <i className="fa-solid fa-minus"></i> 4
                  </span>
                </a>
                <a href="#">
                  <span>
                    4 <i className="fa-solid fa-minus"></i> 6
                  </span>
                </a>
              </div>
            </div>
            <div className={cx("sub__bottom")}>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-pic1.webp"
                alt="img"
              />
              <h2>Duvet Cover Set</h2>
              <p>-40% off</p>
              <a href="#">
                <span className={cx("view")}>VIEW COLLECTION</span>
              </a>
            </div>
          </div>
        </div>

        <div className={cx("navList")}>
          <div className={cx("navList__item")}>
            <a href="">
              <span>Bed Sets</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>Sleepwear</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>Pyjamas</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>Nighties</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>Bathrobes</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>Classic</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>Fancy</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className={cx("navList__item")}>
            <a href="">
              <span>More products</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
