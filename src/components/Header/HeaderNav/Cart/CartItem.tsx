import React from "react";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
import { cartData } from "../../../../data/data";
import { IProductType } from "../../../../configs/types";

const cx = classNames.bind(styles);

interface IProps {
  data: IProductType;
}

const CartItem: React.FC<IProps> = (props) => {
  const { data } = props;

  console.log("🚀 ~ data:", data);
  return (
    <div className={cx("cartItem__wrapper")}>
      <div className={cx("top")}></div>
      <div className={cx("bottom")}></div>
    </div>
  );
};

export default CartItem;
