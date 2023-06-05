import React from "react";
import classNames from "classnames/bind";
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
      <img src={data.productImage} alt="img" />
      <div className={cx("name")}>{data.productName}</div>
      <div className={cx("colorList")}>
        {data.colorList.map((color: IColorType, index) => (
          <div
            key={index}
            className={cx("colorItem")}
            style={{ backgroundColor: color.code }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
