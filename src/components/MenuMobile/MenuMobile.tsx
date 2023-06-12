import React, { useContext, useState } from "react";
import classNames from "classnames/bind";

import styles from "./MenuMobile.module.scss";
import { CartContext } from "../../context/CartContext";
import Cart from "../Header/HeaderNav/Cart/Cart";

const cx = classNames.bind(styles);

const MenuMobile = () => {
  const [state, dispatch] = useContext(CartContext);
  const { cartList, wishlish } = state;

  const [showCart, setShowCart] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  let totalCart = 0;

  if (cartList.length > 0) {
    for (let cart of cartList) {
      totalCart += cart.currQuantity;
    }
  }
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("menuItem")}>
          <i className="fa-solid fa-table-cells-large"></i>
        </div>
        <div className={cx("menuItem")}>
          <i className="fa-regular fa-user"></i>
        </div>
        <div className={cx("menuItem")}>
          <div>
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => setShowCart(true)}
            ></i>
            <span>{totalCart}</span>
          </div>
        </div>
        <div className={cx("menuItem")}>
          <div>
            <i className="fa-regular fa-heart"></i>
            <span>{wishlish}</span>
          </div>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showLogin && <div className={cx("")}></div>}
    </div>
  );
};

export default MenuMobile;
