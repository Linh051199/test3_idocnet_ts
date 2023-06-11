import React, { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import styles from "./ProductItem.module.scss";
import { IProductType, IColorType } from "../../configs/types";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

interface IProps {
  data: IProductType;
}
const ProductItem: React.FC<IProps> = (props) => {
  const { data } = props;

  const [heart, setHeart] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <Link to={"/product"} state={props}>
          <img className={cx("image")} src={data.productImage} alt="img" />
          <img
            className={cx("imageBack")}
            src={data.productImageBack}
            alt="img"
          />
        </Link>
        <div className={cx("subs")}>
          <Link to={"/product"} state={props}>
            <i className="fa-solid fa-link"></i>
          </Link>
          {heart ? (
            <i
              className="fa-regular fa-heart"
              onClick={() => setHeart(!heart)}
            ></i>
          ) : (
            <i
              className={cx("fa-solid fa-heart", "heartActive")}
              style={{ color: "#111" }}
              onClick={() => setHeart(!heart)}
            ></i>
          )}

          <i
            className="fa-solid fa-maximize"
            onClick={() => setModal(true)}
          ></i>
        </div>
      </div>
      <div className={cx("info")}>
        <div className={cx("name")}>{data.productName}</div>
        <div className={cx("colorList")}>
          {data.colorList.map((color: IColorType, index) => (
            <Tippy content={color.name} key={index}>
              <div
                className={cx("colorItem")}
                style={{ backgroundColor: color.code }}
              ></div>
            </Tippy>
          ))}
        </div>
        <div className={cx("price")}>
          {data.productPriceSale && <span>{data.productPriceSale}</span>}
          <p className={data.productPriceSale ? cx("activePrice") : ""}>
            ${data.productPrice}
          </p>
        </div>
      </div>
      {modal && (
        <div className={cx("modal__wrapper")}>
          <div
            className={cx("modal__overlay")}
            onClick={() => setModal(false)}
          ></div>
          <div className={cx("modal__container")}>
            <div className={cx("modal__carousel")}>
              <img src={data.productImage} alt="img" />
            </div>
            <div className={cx("modal__info")}>
              <div className={cx("header")}>
                <h1>Duvet Cover Set Pumpkin Bear</h1>
                <p>
                  Lorem ipsum dolor sit amet enim. Etiam ullamcorper. <br />
                  Suspendisse a non felis eleifend justo vel bibendum sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
