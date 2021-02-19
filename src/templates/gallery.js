import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GalleryComponent from "../components/Gallery";
import BackgroundImage from "gatsby-background-image";

const Gallerypage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <BackgroundImage
        Tag="section"
        className="image-container"
        fluid={page.frontmatter.image.childImageSharp.fluid}
      >
        <h2 className="page-title">{page.frontmatter.title}</h2>
      </BackgroundImage>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <article className="content">
            <GalleryComponent />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Gallerypage;

export const pageQuery = graphql`
  query Gallery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
  }
`;
