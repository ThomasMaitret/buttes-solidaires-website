import React from "react";
import Image from "gatsby-image";

const HeaderImage = ({ image, text }) => {
  return (
    <div className="image-container">
      <Image fluid={image} alt="please include an alt" className="w-full" />
      <h2 className="page-title">{text}</h2>
    </div>
  );
};

export default HeaderImage;
