import React from "react";
import classNames from "classnames/bind";

import styles from "./Highlight.module.scss";

const cx = classNames.bind(styles);

const Highlight = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("item")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon1.png"
            alt="img"
          />
          <p>FREE SHIPPING</p>
        </div>

        <div className={cx("item")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon2.png"
            alt="img"
          />
          <p>RETURN POLICY</p>
        </div>

        <div className={cx("item")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon3.png"
            alt="img"
          />
          <p>PAYMENT SECURE</p>
        </div>

        <div className={cx("item")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon4.png"
            alt="img"
          />
          <p>FREE SUPPORT</p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
