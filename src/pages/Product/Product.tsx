import React from "react";
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

const cx = classNames.bind(styles);
const Product: React.FC = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div className={cx("wrapper")}>
      <Header active="ourProduct" />
      <ProductInfo dataProduct={data} />
      <Desc />
      <BackGroudAd />
      <Compare />
      <Additional data={data} />
      <Review />
      <Related />
      <Highlight />
      <Footer />
    </div>
  );
};

export default Product;
