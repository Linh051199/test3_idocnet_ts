import React from "react";
import classNames from "classnames/bind";
import styles from "./BestSeller.module.scss";
import { bestSellerData } from "../../../data/data";
import ProductItem from "../../../components/ProductItem/ProductItem";

const cx = classNames.bind(styles);

const BestSeller = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("header")}>Our bestsellers</div>
        <div className={cx("body")}>
          <div className={cx("list")}>
            {bestSellerData.map((product) => (
              <div key={product.id} className={cx("item")}>
                <ProductItem data={product} />
              </div>
            ))}
          </div>
        </div>
        <div className={cx("contact")}>
          <div className={cx("footer__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client5.png"
              alt="img"
            />
          </div>

          <div className={cx("footer__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client4.png"
              alt="img"
            />
          </div>

          <div className={cx("footer__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client3.png"
              alt="img"
            />
          </div>

          <div className={cx("footer__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client2.png"
              alt="img"
            />
          </div>

          <div className={cx("footer__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client1.png"
              alt="img"
            />
          </div>
        </div>

        <div className={cx("instagram")}>
          <button className={cx("instagramBtn")}>instagram</button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
