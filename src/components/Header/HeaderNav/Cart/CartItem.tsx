import React, { useContext, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
import { cartData } from "../../../../data/data";
import { ICartType, IProductType } from "../../../../configs/types";
import { CartContext } from "../../../../context/CartContext";
import { actions } from "../../../../context";

const cx = classNames.bind(styles);

interface IProps {
  data: ICartType;
  index: number;
}

const CartItem: React.FC<IProps> = (props) => {
  const { data, index } = props;
  const [state, dispatch] = useContext(CartContext);

  const [currQuantity, setCurrentQuantity] = useState(data.currQuantity);
  // console.log("🚀 ~ currNumber:", currNumber);

  const handleOnClickDelete = (index: number) => {
    dispatch(actions.deleteCart(index));
  };

  const getSubtotal = (number: any, price: number) => {
    return (number * price).toFixed(2);
  };
  console.log("quantity", currQuantity);
  const newCartIncrease = { ...data, currQuantity: currQuantity + 1 };
  const newCartDecrease = { ...data, currQuantity: currQuantity - 1 };

  const handleOnClickDecrease = () => {
    if (currQuantity > 1) {
      setCurrentQuantity(currQuantity - 1);
    }
    dispatch(actions.updateCart(newCartDecrease));
    // dispatch(actions.decreaseQuantity(data));
  };

  const handleOnClickIncrease = () => {
    setCurrentQuantity(currQuantity + 1);

    dispatch(actions.updateCart(newCartIncrease));
  };
  return (
    <div className={cx("cartItem__wrapper")}>
      <div className={cx("top")}>
        <img src={data.productImage} alt="img" />
        <div className={cx("cartItem__info")}>
          <h3>{data.productName}</h3>
          <div className={cx("cartItem__infoColor")}>
            Color: <span> {data.currColor}</span>
          </div>
          <p>
            Price: <span> ${data.productPrice.toFixed(2)}</span>
          </p>
        </div>
        <div className={cx("cartItem__separate")}></div>
        <div className={cx("cartItem__price")}>
          ${getSubtotal(currQuantity, data.productPrice)}
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("quantity")}>
          <i className="fa-solid fa-minus" onClick={handleOnClickDecrease}></i>
          <span>{currQuantity}</span>
          <i className="fa-solid fa-plus" onClick={handleOnClickIncrease}></i>
        </div>
        <div
          className={cx("remove")}
          onClick={() => handleOnClickDelete(index)}
        >
          <i className="fa-solid fa-trash-can"></i>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
