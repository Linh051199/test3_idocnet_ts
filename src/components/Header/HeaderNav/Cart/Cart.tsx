import React, { useContext } from "react";
import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
import { cartData } from "../../../../data/data";
import CartItem from "./CartItem";
import storage from "../../../../Util/storage";
import { CartContext } from "../../../../context/CartContext";

const cx = classNames.bind(styles);

interface IProps {
  setShowCart: any;
}

const Cart: React.FC<IProps> = ({ setShowCart }) => {
  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;
  // console.log("🚀 ~ cartList:", cartList);

  let total = 0;

  if (cartList.length > 0) {
    for (let cart of cartList) {
      total += cart.currQuantity * cart.productPrice;
    }
  }
  const handleCloseShowCart = () => {
    setShowCart(false);
  };

  // const cartData = storage.get();
  // console.log("🚀 ~ cartData:", cartData);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("overlay")} onClick={() => setShowCart(false)}></div>
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
          {cartList.map((cart: any, index: number) => (
            <div key={index} className={cx("cartItem")}>
              <CartItem data={cart} index={index} />
            </div>
          ))}
        </div>
        <div className={cx("footer")}>
          <div className={cx("footer__subTotal")}>
            <p>Subtotal:</p>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={cx("footer__separate")}></div>
          <div className={cx("footer__total")}>
            <p>Total:</p>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
