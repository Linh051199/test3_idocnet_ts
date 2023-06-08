import React from "react";
import classNames from "classnames/bind";

import styles from "./Special.module.scss";

const cx = classNames.bind(styles);

const Special: React.FC = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
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
        <div className={cx("right__carousel")}></div>
      </div>
    </div>
  );
};

export default Special;
