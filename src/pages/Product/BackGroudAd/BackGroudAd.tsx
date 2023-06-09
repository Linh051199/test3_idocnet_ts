import React from "react";
import classNames from "classnames/bind";

import styles from "./BackGroudAd.module.scss";

const cx = classNames.bind(styles);
const BackGroudAd = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("left")}>
          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-productdetails-pic1.webp"
            alt="img"
          />
          <p>BIBENDUM NETUS</p>

          <h1>
            Vestibulum <br /> bibendum <br /> nulla <br /> torquent <br />
            semper
          </h1>

          <span>
            Tristique nisi rutrum porta magna pharetra <br /> aenean proin
            rutrum nostra eu <br /> curabitur consequat dolor molestie <br />{" "}
            auctor porta et lacus porta fusce <br /> vulputate non dui quis.
          </span>
        </div>
        <div className={cx("right")}>
          <h4>PHASELLUS TORTOR</h4>
          <h1>
            Ultricies <br /> porta <br /> urna <br /> laoreet <br /> enim
          </h1>
          <span>
            Inceptos aliquam lectus nullam eget mi <br /> sapien luctus praesent
            habitant porttitor <br /> tempor proin tempor gravida massa at{" "}
            <br /> lectus nam praesent sociosqu aenean <br /> quis.
          </span>

          <div className={cx("starList")}>
            <div className={cx("startItem")}>
              <i className="fa-solid fa-star"></i>
              <p>Suspendisse a pellentesque.</p>
            </div>

            <div className={cx("starSeparate")}></div>

            <div className={cx("startItem")}>
              <i className="fa-solid fa-star"></i>
              <p>Suspendisse a pellentesque.</p>
            </div>

            <div className={cx("starSeparate")}></div>

            <div className={cx("startItem")}>
              <i className="fa-solid fa-star"></i>
              <p>Suspendisse a pellentesque.</p>
            </div>

            <div className={cx("starSeparate")}></div>

            <div className={cx("startItem")}>
              <i className="fa-solid fa-star"></i>
              <p>Suspendisse a pellentesque.</p>
            </div>
          </div>

          <img
            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-blog-pic4.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default BackGroudAd;
