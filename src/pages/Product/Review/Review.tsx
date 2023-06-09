import React from "react";
import classNames from "classnames/bind";

import styles from "./Review.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);

const Review = () => {
  return (
    <div className={cx("wrapper", "grid")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("image")}>
          <img src={images.line} alt="img" />
        </div>

        <div className={cx("body")}>
          <h2>Review</h2>
          <span>There are no reviews yet.</span>
          <p>Be the first to review “Duvet Cover Set Pumpkin Bear”</p>
          <span>
            You must be <a href="">logged in</a> to post a review.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
