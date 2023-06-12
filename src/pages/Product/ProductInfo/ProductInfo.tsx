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
  const [sizeChart, setSizeChart] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [currColor, setCurrColor] = useState("");
  const [currImg, setCurrImg] = useState(1);
  const [currAge, setCurrAge] = useState("");
  const [currHeight, setCurrHeight] = useState<number>();

  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const cartProduct = {
    ...dataProduct,
    currQuantity: quantity,
    currColor: currColor,
    currAge: currAge,
    currHeight: currHeight,
  };

  let isBtnActive = false;

  if (
    cartProduct.currColor !== "" &&
    cartProduct.currHeight !== undefined &&
    currAge !== ""
  ) {
    isBtnActive = true;
  }

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
  const handleOnChangeAge = (e: any) => {
    setCurrAge(e.target.value);
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
              <i
                className="fa-solid fa-ruler-combined"
                onClick={() => setSizeChart(true)}
              ></i>
              <p onClick={() => setSizeChart(true)}>Sizes chart</p>
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
                <select onChange={handleOnChangeAge}>
                  <option value="">Choose an option</option>
                  {dataProduct.age?.map((item, index) => (
                    <option key={index} value={item}>
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
              {isBtnActive ? (
                <div
                  className={cx("product__btnActive")}
                  onClick={handleAddCart}
                >
                  Add to cart
                </div>
              ) : (
                <div className={cx("product__btn")} onClick={handleAddCart}>
                  Add to cart
                </div>
              )}
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
      {sizeChart && (
        <div className={cx("sizeChart__modal")}>
          <div
            className={cx("sizeChart__overlay")}
            onClick={() => setSizeChart(false)}
          ></div>
          <div className={cx("sizeChart__container")}>
            <div
              className={cx("sizeChart__btnClose")}
              onClick={() => setSizeChart(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h4>Sizes chart</h4>
            <table>
              <thead>
                <tr>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Age</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>49-60 cm</td>
                  <td>3-4 kg</td>
                  <td>0-2 months</td>
                  <td>50-56</td>
                </tr>
                <tr>
                  <td>61-68 cm</td>
                  <td> 5-8 kg </td>
                  <td>2-6 months </td>
                  <td>62-68</td>
                </tr>
                <tr>
                  <td>69-80 cm </td>
                  <td> 9-11 kg</td>
                  <td> 6-12 months</td>
                  <td>74-80</td>
                </tr>
                <tr>
                  <td>81-92 cm </td>
                  <td> 12-14 kg</td>
                  <td>1-2 years</td>
                  <td>86-92</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
