import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./FooterBottom.module.scss";

const cx = classNames.bind(styles);
const FooterBottom = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("title")}>
          <p>© 2023 Betheme by</p>
          <a> Muffin group</a>
          <span></span>
          <p>All Rights Reserved</p>
          <span></span>
          <p>Powered by</p>
          <a>WordPress</a>
        </div>
        <div className={cx("link")}>
          <div className={cx("link__item")}>Terms and conditions</div>
          <div className={cx("link__item")}> Privacy policy</div>
          <div className={cx("link__item")}> Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
