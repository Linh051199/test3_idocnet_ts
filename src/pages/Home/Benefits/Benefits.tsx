import React from "react";
import classNames from "classnames/bind";
import styles from "./Benefits.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

const Benefits = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wider")}>
        <div className={cx("header")}>
          <p>
            What are benefits of <br /> choosing us?
          </p>
          <span>
            Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
            <br /> rhoncus eu, luctus et interdum.
          </span>
        </div>
        <div className={cx("body")}>
          <div className={cx("info")}>
            <div className={cx("item")}>
              <img
                src="https://baby-shop-psi.vercel.app/images/babyshop-features-icon1.png"
                alt="img"
              />
              <p>100% BIO</p>
              <span>
                Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
              </span>
            </div>
            <img className={cx("separate")} src={images.line} alt="img" />

            <div className={cx("item")}>
              <img
                src="https://baby-shop-psi.vercel.app/images/babyshop-features-icon3.png"
                alt="img"
              />
              <p>COMFORT FOAM</p>
              <span>
                Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
              </span>
            </div>
          </div>

          <div className={cx("center")}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-pic1.webp"
              alt="img"
            />
          </div>

          <div className={cx("info")}>
            <div className={cx("item")}>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon2.png"
                alt="img"
              />
              <p>HIGH SAFETY</p>
              <span>
                Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
              </span>
            </div>
            <img className={cx("separate")} src={images.line} alt="img" />
            <div className={cx("item")}>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon4.png"
                alt="img"
              />
              <p>MOISTURE CONTROL</p>
              <span>
                Lorem ipsum dolor sit amet enim <br /> etiam lorem lectus
              </span>
            </div>
          </div>
        </div>

        <button> see all fearures</button>

        <div className={cx("board")}>
          <div className={cx("board__left")}>
            <div className={cx("overlay")}></div>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic1.webp"
              alt="img"
            />
            <div className={cx("content")}>
              <div className={cx("content__header")}>
                <i className="fa-solid fa-user"></i>
                <p> Muffin Group on </p>
                <i className="fa-regular fa-clock"></i>
                <p>October 11, 2021</p>
              </div>
              <div className={cx("content__footer")}>
                Tempor diam pede cursus vitae
              </div>
            </div>
          </div>
          <div className={cx("board__right")}>
            <div className={cx("board__rightTop")}>
              <div className={cx("overlay")}></div>
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2.webp"
                alt="img"
              />
              <div className={cx("content")}>
                <div className={cx("content__header")}>
                  <i className="fa-solid fa-user"></i>
                  <p> Muffin Group on </p>
                  <i className="fa-regular fa-clock"></i>
                  <p>October 11, 2021</p>
                </div>
                <div className={cx("content__footer")}>
                  Tempor diam pede cursus vitae
                </div>
              </div>
            </div>
            <div className={cx("board__rightBottom")}>
              <div className={cx("overlay")}></div>

              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic3.webp"
                alt="img"
              />
              <div className={cx("content")}>
                <div className={cx("content__header")}>
                  <i className="fa-solid fa-user"></i>
                  <p> Muffin Group on </p>
                  <i className="fa-regular fa-clock"></i>
                  <p>October 11, 2021</p>
                </div>
                <div className={cx("content__footer")}>
                  Tempor diam pede cursus vitae
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
