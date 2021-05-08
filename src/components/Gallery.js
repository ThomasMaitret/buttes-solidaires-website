import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Gallery from "@browniebroke/gatsby-image-gallery";

const GalleryComponent = () => {
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(width: 270, height: 270)
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
            name
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.name,
  }));

  return (
    <div className="gallery">
      <Gallery images={images} />
    </div>
  );
};

export default GalleryComponent;
