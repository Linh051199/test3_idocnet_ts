import React from "react";
import classNames from "classnames/bind";

import styles from "./Desc.module.scss";

const cx = classNames.bind(styles);
const Desc = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("titleList")}>
          <div>Description</div>
          <div>Additional information</div>
          <div>Reviews</div>
        </div>

        <div className={cx("subTitle")}>
          Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse <br />{" "}
          pellentesque dui, non felis. Maecenas malesuada elit lectus felis,{" "}
          <br /> malesuada ultricies. Curabitur et.
        </div>

        <div className={cx("highLight")}>
          <div className={cx("item")}>
            <p>ENVIRONMENTALLY FRIENDLY</p>
            <div className={cx("itemList")}>
              <p style={{ backgroundColor: "#eac989" }}>
                <i className="fa-solid fa-gear "></i>
              </p>
              <p style={{ backgroundColor: "#eac989" }}>
                <i className="fa-solid fa-gear "></i>
              </p>
              <p style={{ backgroundColor: "#eac989" }}>
                <i className="fa-solid fa-gear "></i>
              </p>
              <p style={{ backgroundColor: "#eac989" }}>
                <i className="fa-solid fa-gear"></i>
              </p>
            </div>
          </div>

          <div className={cx("item")}>
            <p>WARMNESS</p>
            <div className={cx("itemList")}>
              <p style={{ backgroundColor: "#558d96" }}>
                <i className="fa-solid fa-droplet"></i>
              </p>
              <p style={{ backgroundColor: "#558d96" }}>
                <i className="fa-solid fa-droplet"></i>
              </p>
              <p style={{ backgroundColor: "#558d96" }}>
                <i className="fa-solid fa-droplet"></i>
              </p>
              <p style={{ backgroundColor: "#f0f0f0" }}>
                <i className="fa-solid fa-droplet"></i>
              </p>
            </div>
          </div>

          <div className={cx("item")}>
            <p>ENVIRONMENTALLY FRIENDLY</p>
            <div className={cx("itemList")}>
              <p style={{ backgroundColor: "#b4aba0" }}>
                <i className="fa-solid fa-hands"></i>
              </p>
              <p style={{ backgroundColor: "#b4aba0" }}>
                <i className="fa-solid fa-hands"></i>
              </p>
              <p style={{ backgroundColor: "#b4aba0" }}>
                <i className="fa-solid fa-hands"></i>
              </p>
              <p style={{ backgroundColor: "#f0f0f0" }}>
                <i className="fa-solid fa-hands"></i>
              </p>
            </div>
          </div>

          <div className={cx("item")}>
            <p>ENVIRONMENTALLY FRIENDLY</p>
            <div className={cx("itemList")}>
              <p style={{ backgroundColor: "#58616d" }}>
                <i className="fa-regular fa-gem"></i>
              </p>
              <p style={{ backgroundColor: "#58616d" }}>
                <i className="fa-regular fa-gem"></i>
              </p>
              <p style={{ backgroundColor: "#f0f0f0" }}>
                <i className="fa-regular fa-gem"></i>
              </p>
              <p style={{ backgroundColor: "#f0f0f0" }}>
                <i className="fa-regular fa-gem"></i>
              </p>
            </div>
          </div>
        </div>

        <div className={cx("imageAD")}>
          <div className={cx("imageAD__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic5.webp"
              alt="img"
            />
            <div className={cx("imageAD__desc")}>
              <p>Pellentesque sed eu</p>
              <span>
                Aenean quis lectus nec magna. In mauris sed molestie tincidunt.
                Nullam a nunc. Nulla facilisi. Morbi pede.
              </span>
            </div>
          </div>

          <div className={cx("imageAD__item")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic4.webp"
              alt="img"
            />
            <div className={cx("imageAD__desc")}>
              <p>Nam pellentesque leo</p>
              <span>
                Nulla nec massa molestie vitae, cursus eu, tempus arcu. Duis
                neque vel metus. Aliquam adipiscing wisi diam.
              </span>
            </div>
          </div>
        </div>

        <div className={cx("desc1")}>
          Ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
          laoreet enim. <br /> Phasellus lorem ipsum fermentum in, dolor.
        </div>
        <div className={cx("desc2")}>
          Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
          rhoncus eu, <br /> luctus et interdum adipiscing wisi. Aliquam erat ac
          ipsum. Integer aliquam purus. <br /> Quisque lorem tortor
        </div>
      </div>
    </div>
  );
};

export default Desc;
