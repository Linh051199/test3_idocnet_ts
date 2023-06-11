import React from "react";
import classNames from "classnames/bind";
import styles from "./Catalog.module.scss";
import images from "../../../assets/images";
import ProductItem from "../../../components/ProductItem/ProductItem";
import { productData } from "../../../data/data";

const cx = classNames.bind(styles);

const Catalog = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("header")}>
          <img src={images.line} alt="img" />

          <p>
            Welcome in our child's world. <br /> All our products are made from
            generations with passion.
          </p>

          <h2>
            Product's
            <br /> Catalog
          </h2>
        </div>

        <div className={cx("productList")}>
          {productData.map((product) => (
            <div key={product.id} className={cx("productListItem")}>
              <ProductItem data={product} />
            </div>
          ))}
        </div>

        <div className={cx("button")}>
          <button>go to shop</button>
          <button>see promotion</button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
