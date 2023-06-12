import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import styles from "./ProductItem.module.scss";
import { IProductType, IColorType } from "../../configs/types";
import { Link } from "react-router-dom";
import { actions } from "../../context";
import { CartContext } from "../../context/CartContext";
// import { wishlistData } from "../../data/data";

const cx = classNames.bind(styles);

interface IProps {
  data: IProductType;
}
const ProductItem: React.FC<IProps> = (props) => {
  const { data } = props;

  const [heart, setHeart] = useState(true);
  const [modal, setModal] = useState(false);
  const [sizeChart, setSizeChart] = useState(false);
  const [currHeight, setCurrHeight] = useState<number>();
  const [currColor, setCurrColor] = useState("");
  const [currAge, setCurrAge] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [state, dispatch] = useContext(CartContext);
  const { cartList } = state;

  const cartProduct = {
    ...data,
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

  const handleSetCurrColor = (color: string) => {
    setCurrColor(color);
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

  const handleOnChangeAge = (e: any) => {
    setCurrAge(e.target.value);
  };

  const handleOnClickHeartIn = () => {
    setHeart(!heart);
    dispatch(actions.addWishLish());
  };

  const handleOnClickHeartDe = () => {
    setHeart(!heart);
    dispatch(actions.removeWishLish());
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <Link to={"/test3_idocnet_ts/product"} state={props}>
          <img className={cx("image")} src={data.productImage} alt="img" />
          <img
            className={cx("imageBack")}
            src={data.productImageBack}
            alt="img"
          />
        </Link>
        <div className={cx("subs")}>
          <Link to={"/test3_idocnet_ts/product"} state={props}>
            <i className="fa-solid fa-link"></i>
          </Link>
          {heart ? (
            <i
              className="fa-regular fa-heart"
              onClick={handleOnClickHeartIn}
            ></i>
          ) : (
            <i
              className={cx("fa-solid fa-heart", "heartActive")}
              style={{ color: "#111" }}
              onClick={handleOnClickHeartDe}
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
          {data.productPriceSale && (
            <span>{data.productPriceSale.toFixed(2)}</span>
          )}
          <p className={data.productPriceSale ? cx("activePrice") : ""}>
            ${data.productPrice.toFixed(2)}
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
            <div
              className={cx("modal__btnClose")}
              onClick={() => setModal(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div
              id="carouselExampleControls"
              className={cx("carousel slide", "modal__carousel")}
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={data.productImage}
                    className="d-block w-100"
                    alt="..."
                    width="100px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={data.productImageBack}
                    className="d-block w-100"
                    alt="..."
                    width="100px"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className={cx("modal__info")}>
              <div className={cx("header")}>
                <h1>Duvet Cover Set Pumpkin Bear</h1>
                <div className={cx("price")}>
                  {data.productPriceSale && (
                    <div className={cx("priceHidden")}>
                      ${data.productPriceSale.toFixed(2)}
                    </div>
                  )}
                  <div className={cx("priceShow")}>
                    ${data.productPrice.toFixed(2)}
                  </div>
                </div>

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
                  <li>
                    Phasellus fermentum in, dolor. Pellentesque facilisis.
                  </li>
                </ul>
              </div>

              <div className={cx("sizeChart")}>
                <i
                  className="fa-solid fa-ruler-combined"
                  onClick={() => setSizeChart(true)}
                ></i>

                <p onClick={() => setSizeChart(true)}>Sizes chart</p>
              </div>

              {data.height && (
                <div className={cx("height")}>
                  <p>Height</p>
                  <div className={cx("heightList")}>
                    {data.height?.map((item, index) => (
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

              {data.age && (
                <div className={cx("age")}>
                  <p>Age</p>
                  <select onChange={handleOnChangeAge}>
                    <option value="">Choose an option</option>
                    {data.age?.map((item, index) => (
                      <option key={index} value={item}>
                        {item} years
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className={cx("colorList")}>
                <p>Color</p>
                {data.colorList.map((color: IColorType, index) => (
                  <Tippy content={color.name} key={index}>
                    <div
                      className={
                        currColor === color.name
                          ? cx("colorItem", "colorActive")
                          : cx("colorItem")
                      }
                      style={{ backgroundColor: color.code }}
                      onClick={() => handleSetCurrColor(color.name)}
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
                <div className={cx("catagory")}>
                  <p>Category: </p>
                  <div className={cx("catagory__list")}>
                    <p>Bed set</p>
                  </div>
                </div>
                <div className={cx("SKU")}>
                  <p>SKU: </p>
                  <span>BE-8727U2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default ProductItem;
