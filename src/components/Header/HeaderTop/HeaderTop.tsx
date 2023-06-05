import React from "react";
import classNames from "classnames/bind";

import styles from "./HeaderTop.module.scss";

const cx = classNames.bind(styles);

const HeaderTop: React.FC = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("body", "grid", "wide")}>
        <div className={cx("title")}>
          <p>Autumn Sales starts on November: </p>

          <span> Sneak a peek now</span>
        </div>
        <div className={cx("nav")}>
          <div className={cx("nav__item")}>Our stores</div>
          <div className={cx("nav__separate")}></div>
          <div className={cx("nav__item")}>Useful info</div>
          <div className={cx("nav__separate")}></div>
          <div className={cx("nav__item")}>Help</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
