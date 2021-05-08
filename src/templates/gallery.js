import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GalleryComponent from "../components/Gallery";
import HeaderImage from "../components/HeaderImage";

const Gallerypage = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <HeaderImage
        image={page.frontmatter.image.childImageSharp.gatsbyImageData}
        text={page.frontmatter.title}
        alt={page.frontmatter.image.name}
      />
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
        title
      }
    }
  }
`;
