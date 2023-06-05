import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
