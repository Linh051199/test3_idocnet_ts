import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import isEmpty from "validator/lib/isEmpty";
import { Link } from "react-router-dom";

import styles from "./HeaderNav.module.scss";
import Cart from "./Cart/Cart";
import { cartData } from "../../../data/data";
import { CartContext } from "../../../context/CartContext";
import { wishlistData } from "../../../data/data";

const cx = classNames.bind(styles);

interface IMessErrlogin {
  name?: string;
  password?: string;
}
interface IProps {
  active: string;
}

const HeaderNav: React.FC<IProps> = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [nameLogin, setNameLogin] = useState<string>("");
  const [passwordLogin, setPasswordLogin] = useState<string>("");
  const [messErrLogin, setMessErrLogin] = useState<IMessErrlogin>({});

  const { active } = props;
  const [state, dispatch] = useContext(CartContext);
  const { cartList, wishlish } = state;

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

  const handleOnChangeNameLogin = (e: any) => {
    setNameLogin(e.target.value);
  };

  const handleOnChangePasswwordLogin = (e: any) => {
    setPasswordLogin(e.target.value);
  };

  const validateAll = () => {
    const arr: IMessErrlogin = {};

    if (isEmpty(nameLogin)) {
      arr.name = "Please enter your name or email!";
    }
    if (isEmpty(passwordLogin)) {
      arr.password = "Please enter your password!";
    }

    setMessErrLogin(arr);
    if (Object.keys(arr).length > 0) return false;
    return true;
  };

  const handleOnSumbitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };

  return (
    <div className={cx("wrapper", "grid", "wide")}>
      <div className={cx("btnNavRes")} onClick={() => setShowNav(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={cx("nav")}>
        <Link to={"/test3_idocnet_ts/"}>
          <div
            className={
              active === "Home" ? cx("nav__item", "active") : cx("nav__item")
            }
          >
            HOME
          </div>
        </Link>
        <div
          className={
            active === "ourProduct"
              ? cx("nav__item", "active")
              : cx("nav__item")
          }
        >
          our products
        </div>
        <div className={cx("nav__item")}>about us</div>
        <div className={cx("nav__item")}>blog</div>
        <div className={cx("nav__item")}>client center</div>
        <div className={cx("nav__item")}>faq</div>
      </div>
      <div className={cx("contact")}>
        <div
          className={cx("contact__user")}
          onClick={() => setShowLogin(!showLogin)}
        >
          <i className="fa-regular fa-user"></i>
        </div>
        {showLogin && (
          <div className={cx("login__container")}>
            <div className={cx("login__header")}>
              <p>Login</p>
              <i
                className="fa-solid fa-xmark"
                onClick={() => setShowLogin(false)}
              ></i>
            </div>
            <form className={cx("login__form")}>
              <div className={cx("login__formInput")}>
                <i className="fa-solid fa-user"></i>
                <input
                  className={cx("login__input")}
                  type="text"
                  placeholder="Username or Email"
                  onChange={handleOnChangeNameLogin}
                />
              </div>
              <p className={cx("login__messErr")}>{messErrLogin.name}</p>
              <div className={cx("login__formInput")}>
                <i className="fa-solid fa-lock"></i>
                <input
                  className={cx("login__input")}
                  type="text"
                  placeholder="Password"
                  onChange={handleOnChangePasswwordLogin}
                />
              </div>
              <p className={cx("login__messErr")}>{messErrLogin.password}</p>
              <div className={cx("login__formCheckbox")}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </div>
            </form>
            <button onClick={handleOnSumbitLogin}>Login</button>
            <div className={cx("login__forgot")}>Lost your password?</div>
          </div>
        )}
        <div className={cx("contact__heart")}>
          <i className="fa-regular fa-heart"></i>
          <span>{wishlish}</span>
        </div>
        <div className={cx("contact__cart")} onClick={() => setShowCart(true)}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{totalCart}</span>
        </div>
        <div className={cx("contact__price")}>${total.toFixed(2)}</div>
        <div
          className={cx("contact__search")}
          onClick={() => setShowSearch(true)}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && (
        <div className={cx("search__wrapper")}>
          <div
            className={cx("search__overlay")}
            onClick={() => setShowSearch(false)}
          ></div>
          <div className={cx("search__container")}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Enter your search" />
            <div
              className={cx("cart__btnClose")}
              onClick={() => setShowSearch(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      )}

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
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => setShowCart(true)}
              ></i>
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

export default HeaderNav;
