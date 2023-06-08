import React from "react";
import classNames from "classnames/bind";
import styles from "./Benefits.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

const Benefits = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("header")}>
        <p>
          What are benefits of <br /> choosing us?
        </p>
        <span>
          Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
          <br /> rhoncus eu, luctus et interdum.
        </span>
      </div>
      <div className={cx("body")}>
        <div className={cx("info")}>
          <div className={cx("item")}>
            <img
              src="https://baby-shop-psi.vercel.app/images/babyshop-features-icon1.png"
              alt="img"
            />
            <p>100% BIO</p>
            <span>
              Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
            </span>
          </div>
          <img className={cx("separate")} src={images.line} alt="img" />

          <div className={cx("item")}>
            <img
              src="https://baby-shop-psi.vercel.app/images/babyshop-features-icon3.png"
              alt="img"
            />
            <p>COMFORT FOAM</p>
            <span>
              Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
            </span>
          </div>
        </div>
        <div className={cx("center")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-pic1.webp"
            alt="img"
          />
        </div>
        <div className={cx("info")}>
          <div className={cx("item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon2.png"
              alt="img"
            />
            <p>HIGH SAFETY</p>
            <span>
              Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
            </span>
          </div>
          <img className={cx("separate")} src={images.line} alt="img" />
          <div className={cx("item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon4.png"
              alt="img"
            />
            <p>MOISTURE CONTROL</p>
            <span>
              Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
            </span>
          </div>
        </div>
      </div>

      <button> see all fearures</button>
    </div>
  );
};

export default Benefits;
