import React, { useContext, useState } from "react";
import classNames from "classnames/bind";

import styles from "./HeaderBottom.module.scss";
import Cart from "../HeaderNav/Cart/Cart";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const HeaderBottom: React.FC = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  let totalCart = 0;

  if (cartList.length > 0) {
    for (let cart of cartList) {
      totalCart += cart.currQuantity;
    }
  }

  let total = 0;

  if (cartList.length > 0) {
    for (let cart of cartList) {
      total += cart.currQuantity * cart.productPrice;
    }
  }

  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <Link to={"/test3_idocnet_ts/"}>
        <img
          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png"
          alt="logo"
        />
      </Link>
      <div className={cx("btnNavRes")} onClick={() => setShowNav(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {showCart && <Cart setShowCart={setShowCart} />}

      {showNav && (
        <div className={cx("navRes__wrapper")}>
          <div
            className={cx("navRes__overlay")}
            onClick={() => setShowNav(false)}
          ></div>
          <div className={cx("navRes__container")}>
            <div
              className={cx("navRes__btnClose")}
              onClick={() => setShowNav(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={cx("navRes__contact")}>
              <i className="fa-regular fa-user"></i>
              <i className="fa-regular fa-heart"></i>
              <div>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => setShowCart(true)}
                ></i>
                <span>{totalCart}</span>
              </div>
              <div className={cx("navRes__price")}>${total.toFixed(2)}</div>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className={cx("navRes__menu")}>
              <div className={cx("navRes__menuItem")}>
                <div
                  className={cx("nav__item")}
                  onClick={() => setShowNav(false)}
                >
                  home
                </div>
                <div
                  className={cx("nav__item")}
                  onClick={() => setShowNav(false)}
                >
                  our product
                </div>
                <div
                  className={cx("nav__item")}
                  onClick={() => setShowNav(false)}
                >
                  about us
                </div>
                <div
                  className={cx("nav__item")}
                  onClick={() => setShowNav(false)}
                >
                  blog
                </div>
                <div
                  className={cx("nav__item")}
                  onClick={() => setShowNav(false)}
                >
                  client center
                </div>
                <div
                  className={cx("nav__item")}
                  onClick={() => setShowNav(false)}
                >
                  faq
                </div>
              </div>
            </div>

            <div className={cx("navRes__subMenu")}>
              <p>Our stores</p>
              <span></span>
              <p>Useful</p>
              <span></span>
              <p>info Help</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
