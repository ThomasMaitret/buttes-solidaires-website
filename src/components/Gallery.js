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
              thumb: fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid_tracedSVG
                originalName
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            name
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: node.childImageSharp.thumb.originalName,
  }));

  return (
    <div className="gallery">
      <Gallery images={images} />
    </div>
  );
};

export default GalleryComponent;
