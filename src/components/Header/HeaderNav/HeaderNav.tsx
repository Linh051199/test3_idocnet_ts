import React, { useState } from "react";
import classNames from "classnames/bind";
import isEmpty from "validator/lib/isEmpty";

import styles from "./HeaderNav.module.scss";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface IMessErrlogin {
  name?: string;
  password?: string;
}
interface IProps {
  active: string;
}

const HeaderNav: React.FC<IProps> = (props) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [nameLogin, setNameLogin] = useState<string>("");
  const [passwordLogin, setPasswordLogin] = useState<string>("");
  const [messErrLogin, setMessErrLogin] = useState<IMessErrlogin>({});

  const { active } = props;
  console.log("🚀 ~ active:", active);

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
      <div className={cx("nav")}>
        <Link to={"/"}>
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
          <span>0</span>
        </div>
        <div className={cx("contact__cart")} onClick={() => setShowCart(true)}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>0</span>
        </div>
        <div className={cx("contact__price")}>$ 0.00</div>
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
    </div>
  );
};

export default HeaderNav;
