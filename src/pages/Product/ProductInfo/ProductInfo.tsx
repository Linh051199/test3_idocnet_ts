import React, { useContext, useState } from "react";
import classNames from "classnames/bind";

import styles from "./ProductInfo.module.scss";
import { IColorType, IProductType } from "../../../configs/types";
import Tippy from "@tippyjs/react";
import { CartContext } from "../../../context/CartContext";
import { actions } from "../../../context";

const cx = classNames.bind(styles);

interface IProp {
  dataProduct: IProductType;
}

const ProductInfo: React.FC<IProp> = (props) => {
  const { dataProduct } = props;

  const [quantity, setQuantity] = useState(1);
  const [currColor, setCurrColor] = useState("");
  const [currHeight, setCurrHeight] = useState<number>();
  const [currImg, setCurrImg] = useState(1);

  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const cartProduct = {
    ...dataProduct,
    currQuantity: quantity,
    currColor: currColor,
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddCart = () => {
    dispatch(actions.addCart(cartProduct));
  };

  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("body")}>
          <div className={cx("productInfo")}>
            <div className={cx("header")}>
              <h1>Duvet Cover Set Pumpkin Bear</h1>
              <p>
                Lorem ipsum dolor sit amet enim. Etiam ullamcorper. <br />
                Suspendisse a non felis eleifend justo vel bibendum sapien.
              </p>
            </div>

            <div className={cx("list")}>
              <ul>
                <li>
                  Maecenas malesuada 5 elit lectus felis, malesuada ultricies.
                </li>
                <li>
                  Curabitur et ligula. Ut molestie a, ultricies porta urna.
                </li>
                <li>
                  Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                </li>
                <li>Phasellus fermentum in, dolor. Pellentesque facilisis.</li>
              </ul>
            </div>

            <div className={cx("madeOf")}>
              Composition: Main material: 95% Cotton, 5% Polyester
            </div>

            <div className={cx("sizeChart")}>
              <i className="fa-solid fa-ruler-combined"></i>
              <p>Sizes chart</p>
            </div>

            <div className={cx("price")}>
              {dataProduct.productPriceSale && (
                <div className={cx("priceHidden")}>
                  ${dataProduct.productPriceSale.toFixed(2)}
                </div>
              )}
              <div className={cx("priceShow")}>
                ${dataProduct.productPrice.toFixed(2)}
              </div>
            </div>

            {dataProduct.height && (
              <div className={cx("height")}>
                <p>Height</p>
                <div className={cx("heightList")}>
                  {dataProduct.height?.map((item, index) => (
                    <div
                      key={index}
                      className={
                        currHeight === item
                          ? cx("heightItem", "heightActive")
                          : cx("heightItem")
                      }
                      onClick={() => setCurrHeight(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {dataProduct.age && (
              <div className={cx("age")}>
                <p>Age</p>
                <select name="" id="">
                  <option value="">Choose an option</option>
                  {dataProduct.age?.map((item, index) => (
                    <option key={index} value="">
                      {item} years
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className={cx("colorList")}>
              <p>Color</p>
              {dataProduct.colorList.map((color: IColorType, index) => (
                <Tippy content={color.name} key={index}>
                  <div
                    className={
                      currColor === color.name
                        ? cx("colorItem", "colorActive")
                        : cx("colorItem")
                    }
                    style={{ backgroundColor: color.code }}
                    onClick={() => setCurrColor(color.name)}
                  ></div>
                </Tippy>
              ))}
            </div>

            <div className={cx("contact")}>
              <div className={cx("quantity")}>
                <i
                  className="fa-solid fa-minus"
                  onClick={handleDecreaseQuantity}
                ></i>
                <span>{quantity}</span>
                <i
                  className="fa-solid fa-plus"
                  onClick={handleIncreaseQuantity}
                ></i>
              </div>
              <button onClick={handleAddCart}> Add to cart</button>
            </div>

            <div className={cx("desc")}>
              <div className={cx("tag")}>
                <p>Tags: </p>
                <div className={cx("tag__list")}>
                  <p>Duvet cover</p>
                  <p>Kids</p>
                  <p>Recyclable</p>
                </div>
              </div>
              <div className={cx("desc__seaprate")}></div>
              <div className={cx("catagory")}>
                <p>Category: </p>
                <div className={cx("catagory__list")}>
                  <p>Bed set</p>
                </div>
              </div>
              <div className={cx("desc__seaprate")}></div>
              <div className={cx("SKU")}>
                <p>SKU: </p>
                <span>BE-8727U2</span>
              </div>
            </div>
          </div>
          <div className={cx("productImage")}>
            <div className={cx("listImage")}>
              <img
                src={dataProduct.productImage}
                alt="img"
                onClick={() => setCurrImg(1)}
              />
              <img
                src={dataProduct.productImageBack}
                alt="img"
                onClick={() => setCurrImg(2)}
              />
            </div>
            <div className={cx("image")}>
              {currImg === 1 ? (
                <img src={dataProduct.productImage} alt="img" />
              ) : (
                <img src={dataProduct.productImageBack} alt="img" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
