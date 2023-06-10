import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle";
import { CartContextProviderProps } from "./context/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GlobalStyle>
    <CartContextProviderProps>
      <App />
    </CartContextProviderProps>
  </GlobalStyle>
);
