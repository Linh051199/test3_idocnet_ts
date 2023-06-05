import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
