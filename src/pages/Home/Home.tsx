import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Catalog from "./Catalog/Catalog";
import Slider from "./Slider/Slider";
import Special from "./Special/Special";
import Benefits from "./Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Catalog />
      <Special />
      <Benefits />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
