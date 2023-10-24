import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform specifically designed to
          facilitate the buying and selling of goods and services over the
          internet. These websites serve as virtual marketplaces, allowing
          businesses to showcase their products or services and consumers to
          browse, select, and purchase them, often with a secure and streamlined
          payment process.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
