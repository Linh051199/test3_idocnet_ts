import React from "react";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
import { cartData } from "../../../../data/data";
import CartItem from "./CartItem";

const cx = classNames.bind(styles);

interface IProps {
  setShowCart: any;
}

const Cart: React.FC<IProps> = ({ setShowCart }) => {
  const handleCloseShowCart = () => {
    setShowCart(false);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("overlay")}></div>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <div className={cx("btnClose")} onClick={handleCloseShowCart}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </div>
        <div className={cx("body")}>
          {cartData?.map((cart) => (
            <div key={cart.id} className={cx("cartItem")}>
              <CartItem data={cart} />
            </div>
          ))}
        </div>
        <div className={cx("footer")}>
          <div className={cx("footer__subTotal")}>
            <p>Subtotal:</p>
            <span>$0.00</span>
          </div>
          <div className={cx("footer__separate")}></div>
          <div className={cx("footer__total")}>
            <p>Total:</p>
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
