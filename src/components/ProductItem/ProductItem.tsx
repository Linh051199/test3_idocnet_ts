import React from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import styles from "./ProductItem.module.scss";
import { IProductType, IColorType } from "../../configs/types";

const cx = classNames.bind(styles);

interface IProps {
  data: IProductType;
}
const ProductItem: React.FC<IProps> = (props) => {
  const { data } = props;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <img className={cx("image")} src={data.productImage} alt="img" />
        <img
          className={cx("imageBack")}
          src={data.productImageBack}
          alt="img"
        />
        <div className={cx("subs")}>
          <i className="fa-solid fa-link"></i>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-maximize"></i>
        </div>
      </div>
      <div className={cx("name")}>{data.productName}</div>
      <div className={cx("colorList")}>
        {data.colorList.map((color: IColorType, index) => (
          <Tippy content={color.name} key={index}>
            <div
              className={cx("colorItem")}
              style={{ backgroundColor: color.code }}
            ></div>
          </Tippy>
        ))}
      </div>
      <div className={cx("price")}>
        {data.productPriceSale && <span>{data.productPriceSale}</span>}
        <p className={data.productPriceSale ? cx("activePrice") : ""}>
          ${data.productPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
