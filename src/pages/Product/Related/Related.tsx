import React from "react";
import classNames from "classnames/bind";
import styles from "./Related.module.scss";
import images from "../../../assets/images";
import { bestSellerData } from "../../../data/data";
import ProductItem from "../../../components/ProductItem/ProductItem";
console.log("🚀 ~ bestSellerData:", bestSellerData);

const cx = classNames.bind(styles);
const Related = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("image")}>
          <img src={images.line} alt="img" />
        </div>

        <div className={cx("body")}>
          <h2>Related products</h2>

          <div className={cx("itemList")}>
            {bestSellerData.map((product) => (
              <div key={product.id} className={cx("item")}>
                <ProductItem data={product} />
              </div>
            ))}
          </div>

          <div className={cx("suggest")}>
            <p>
              Not for you? - <span> Back to product list</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
