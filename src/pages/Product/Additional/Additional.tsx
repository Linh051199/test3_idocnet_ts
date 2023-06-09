import React from "react";
import classNames from "classnames/bind";

import styles from "./Additional.module.scss";
import images from "../../../assets/images";
import { IProductType } from "../../../configs/types";

const cx = classNames.bind(styles);

interface IProps {
  data: IProductType;
}

const Additional: React.FC<IProps> = (props) => {
  const { data } = props;
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("imageLine")}>
          <img src={images.line} alt="img" />
        </div>
        <div className={cx("body")}>
          <h2>Additional information</h2>
          <div className={cx("color")}>
            <p>Color</p>
            <span></span>
            <div className={cx("colorList")}>
              {data.colorList.map((color, index) => (
                <div key={index}>{color.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
