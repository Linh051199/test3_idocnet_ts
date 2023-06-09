import React from "react";
import classNames from "classnames/bind";

import styles from "./Compare.module.scss";
import images from "../../../assets/images";
const cx = classNames.bind(styles);

const Compare = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("header")}>
          <h2>
            Compare our <br /> products
          </h2>
          <p>
            Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
            rhoncus eu, luctus et interdum.
          </p>
        </div>

        <div className={cx("body")}>
          <div className={cx("item")}>
            <div className={cx("itemHeader")}>
              <p style={{ backgroundColor: "#eac989" }}>1</p>
              <h2>Variant 1</h2>
              <span>
                Vitae adipiscing turpis. Aenean <br /> ligulamolestie id vivide.
              </span>
            </div>

            <div className={cx("itemBody")}>
              <div className={cx("item")}>10</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>Lorem lipsum</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>○</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>Morbi accumsan</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>○</div>
            </div>
          </div>

          <div className={cx("item")}>
            <div className={cx("itemHeader")}>
              <p style={{ backgroundColor: "#59616d" }}>2</p>
              <h2>Variant 2</h2>
              <span>
                Vitae adipiscing turpis. Aenean <br /> ligulamolestie id vivide.
              </span>
            </div>

            <div className={cx("itemBody")}>
              <div className={cx("item")}>10</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>Lorem lipsum</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>○</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>Morbi accumsan</div>
              <div className={cx("seaprate")}></div>

              <div className={cx("item")}>○</div>
            </div>
          </div>

          <div className={cx("item")}>
            <div className={cx("itemHeader")}>
              <p style={{ backgroundColor: "#b4aca0" }}>3</p>
              <h2>Variant 3</h2>
              <span>
                Vitae adipiscing turpis. Aenean <br /> ligulamolestie id vivide.
              </span>
            </div>

            <div className={cx("itemBody")}>
              <p className={cx("item")}>10</p>
              <div className={cx("seaprate")}></div>

              <p className={cx("item")}>Lorem lipsum</p>
              <div className={cx("seaprate")}></div>

              <p className={cx("item")}>●</p>
              <div className={cx("seaprate")}></div>

              <p className={cx("item")}>Morbi accumsan</p>
              <div className={cx("seaprate")}></div>

              <p className={cx("item")}>○</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
