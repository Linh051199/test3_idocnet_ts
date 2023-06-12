import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Catalog from "./Catalog/Catalog";
import Slider from "./Slider/Slider";
import Special from "./Special/Special";
import Benefits from "./Benefits/Benefits";
import BestSeller from "./BestSeller/BestSeller";
import Highlight from "../../components/Highlight/Highlight";
import HeaderFixed from "../../components/Header/HeaderFixed/HeaderFixed";
import Help from "../../components/Help/Help";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import BtnGoToTop from "../../components/BtnGoToTop/BtnGoToTop";

const cx = classNames.bind(styles);

const Home = () => {
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
    <div className={cx("home__wrapper")}>
      {show && <HeaderFixed active="Home" />}
      <Header active="Home" />
      <Slider />
      <Catalog />
      <Special />
      <Benefits />
      <BestSeller />
      <Highlight />
      <BtnGoToTop />
      <Help />
      <Footer />
      <MenuMobile />
    </div>
  );
};

export default Home;
