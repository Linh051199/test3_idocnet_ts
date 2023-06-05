import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./FooterBottom.module.scss";

const cx = classNames.bind(styles);
const FooterBottom = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("title")}>
          <p>© 2023 Betheme by</p>
          <a> Muffin group</a>
          <span></span>
          <p>All Rights Reserved</p>
          <span></span>
          <p>Powered by</p>
          <a>WordPress</a>
        </div>
        <div className={cx("link")}>
          <div className={cx("link__item")}>Terms and conditions</div>
          <div className={cx("link__item")}> Privacy policy</div>
          <div className={cx("link__item")}> Cookies</div>
        </div>
      </div>
      <div className={cx("help")} onClick={() => setShowHelp(!showHelp)}>
        <i className="fa-solid fa-question"></i>
      </div>
      {showHelp && (
        <div className={cx("help__container")}>
          <div className={cx("help__header")}>
            <h3>Helpdesk</h3>
            <p>
              If you checked our FAQ and didn't find your answer, pick the
              correct subject below and try to describe your problem
            </p>
          </div>
          <div className={cx("help__form")}>
            <select className={cx("help__select")}>
              <option value="">Payment problem</option>
              <option value="">Delivery problem</option>
              <option value="">Incomplete problem</option>
              <option value="">The defect of the product</option>
              <option value="">Website problem</option>
            </select>
            <input
              type="text"
              className={cx("help__input")}
              placeholder="Name and surname"
            />
            <input
              type="text"
              className={cx("help__input")}
              placeholder="Email"
            />
            <textarea
              className={cx("help__input")}
              placeholder="Describe your problem"
              style={{ height: "140px", width: "100%" }}
            />
          </div>
          <button>Get help</button>
        </div>
      )}
    </div>
  );
};

export default FooterBottom;
