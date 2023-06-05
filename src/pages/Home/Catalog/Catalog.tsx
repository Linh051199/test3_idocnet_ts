import React from "react";
import classNames from "classnames/bind";
import styles from "./Catalog.module.scss";
import images from "../../../assets/images";
import Product from "../../Product/Product";

const cx = classNames.bind(styles);

const Catalog = () => {
  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("header")}>
        <img src={images.line} alt="img" />

        <p>
          Welcome in our child's world.
          <br /> All our products are made
          <br /> from generations with passion.
        </p>

        <h2>
          Product's
          <br /> Catalog
        </h2>
      </div>

      <div className={cx("productList")}>
        <div className={cx("productListItem")}>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
