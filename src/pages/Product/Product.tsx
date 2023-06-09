import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import styles from "./Product.module.scss";
import ProductInfo from "./ProductInfo/ProductInfo";
import Header from "../../components/Header/Header";
import Desc from "./Desc/Desc";
import BackGroudAd from "./BackGroudAd/BackGroudAd";
import Compare from "./Compare/Compare";
import Additional from "./Additional/Additional";
import Review from "./Review/Review";
import Related from "./Related/Related";
import Highlight from "../../components/Highlight/Highlight";
import Footer from "../../components/Footer/Footer";
import HeaderFixed from "../../components/Header/HeaderFixed/HeaderFixed";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Help from "../../components/Help/Help";
import BtnGoToTop from "../../components/BtnGoToTop/BtnGoToTop";

const cx = classNames.bind(styles);
const Product: React.FC = () => {
  const location = useLocation();
  const data = location.state.data;
  const [show, setShow] = useState<boolean>(false);
  const controlHeader = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <div className={cx("wrapper")}>
      {show && <HeaderFixed active="ourProduct" />}
      <Header active="ourProduct" />
      <ProductInfo dataProduct={data} />
      <Desc />
      <BackGroudAd />
      <Compare />
      <Additional data={data} />
      <Review />
      <Related />
      <Highlight />
      <BtnGoToTop />
      <Help />
      <Footer />
      <MenuMobile />
    </div>
  );
};

export default Product;
