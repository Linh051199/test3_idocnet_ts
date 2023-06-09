import React from "react";
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

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("home__wrapper")}>
      <Header active="Home" />
      <Slider />
      <Catalog />
      <Special />
      <Benefits />
      <BestSeller />
      <Highlight />
      <Footer />
    </div>
  );
};

export default Home;
