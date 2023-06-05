import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Catalog from "./Catalog/Catalog";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Catalog />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
