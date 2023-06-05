import React from "react";
import "./GlobalStyle.scss";

interface IProps {
  children: any;
}

const GlobalStyle: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default GlobalStyle;
