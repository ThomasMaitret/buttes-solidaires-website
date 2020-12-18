import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";

const GalleryComponent = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
  }));

  return (
    <div className="gallery">
      <Gallery images={images} />
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query ImagesForGallery {
        allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
          edges {
            node {
              childImageSharp {
                thumb: fluid(maxWidth: 270, maxHeight: 270) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
                full: fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <GalleryComponent data={data} />}
  />
);
