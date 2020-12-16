import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import BackgroundImage from "gatsby-background-image";

export const PageTemplate = ({ image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <BackgroundImage
        Tag="section"
        className="full-width-image-container mt-0"
        fluid={image.childImageSharp.fluid}
      >
        <h2
          className="has-text-weight-bold is-size-1 page-title"
          style={{
            backgroundColor: "#2d9752",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "7px",
          }}
        >
          {title}
        </h2>
      </BackgroundImage>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

PageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Page = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PageTemplate
        image={frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Page;

export const aboutPageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;
