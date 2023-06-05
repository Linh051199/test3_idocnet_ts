import React from "react";
import classNames from "classnames/bind";

import styles from "./FooterTop.module.scss";

const cx = classNames.bind(styles);

const FooterTop = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("logo")}>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop.png"
          alt="img"
        />
        <p>In the BeFriends Club you can take advantage of attractive offers</p>
        <button>join now</button>
        <div className={cx("pay")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-pic1.png"
            alt="img"
          />
        </div>
      </div>
      <div className={cx("info")}>
        <div className={cx("info__item")}>
          <p>Useful links</p>
          <span>Contact us</span>
          <span>Help & About us</span>
          <span>Shipping & Returns</span>
          <span>Refund Policy</span>
        </div>
        <div className={cx("info__item")}>
          <p>Delivery</p>
          <span>How it Works</span>
          <span>Free Delivery</span>
          <span>FAQ</span>
        </div>
      </div>
      <div className={cx("service")}>
        <div className={cx("service__item")}>
          <p>Customer service</p>
          <span>Orders</span>
          <span>Downloads</span>
          <span>Addresses</span>
          <span>Account details</span>
          <span>Lost password</span>
        </div>
      </div>
      <div className={cx("help")}>
        <div className={cx("help__top")}>
          <div className={cx("help__title")}>Need help?</div>
          <p>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span> +61 (0) 383 766 284</span>
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span> +61 (0) 383 766 284</span>
          </p>
        </div>
        <div className={cx("help__bottom")}>
          <div className={cx("help__bottomTitle")}>Opening hours:</div>

          <div>
            <p>Monday - Friday:</p>
            <span>8am - 5pm</span>
          </div>

          <div>
            <p>Saturday - Sunday:</p>
            <span>9am - 4pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
