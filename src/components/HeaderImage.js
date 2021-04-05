import React from "react";
import Image from "gatsby-image";

const HeaderImage = ({ image, text, alt }) => {
  return (
    <div className="image-container">
      <Image fluid={image} alt={alt} className="w-full h-full" />
      <h2 className="page-title">{text}</h2>
    </div>
  );
};

export default HeaderImage;
