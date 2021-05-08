import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const HeaderImage = ({ image, text, alt }) => {
  return (
    <div className="image-container">
      <GatsbyImage image={image} alt={alt} className="w-full h-full" />
      <h2 className="page-title">{text}</h2>
    </div>
  );
};

export default HeaderImage;
