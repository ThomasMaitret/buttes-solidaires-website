import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BackgroundImage from "gatsby-background-image";

const Page = ({ data }) => {
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
          <article
            className="content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
