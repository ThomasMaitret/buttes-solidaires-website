import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BackgroundImage from "gatsby-background-image";

const Page = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <div>
        <BackgroundImage
          Tag="section"
          className="full-width-image-container mt-0"
          fluid={page.frontmatter.image.childImageSharp.fluid}
        >
          <h2 className="has-text-weight-bold is-size-1 page-title">
            {page.frontmatter.title}
          </h2>
        </BackgroundImage>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>
            </div>
          </div>
        </section>
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
