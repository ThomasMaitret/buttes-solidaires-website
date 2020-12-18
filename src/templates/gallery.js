import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import GalleryComponent from "../components/Gallery";
import BackgroundImage from "gatsby-background-image";

export const GalleryTemplate = ({
  image,
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <BackgroundImage
        Tag="section"
        className="full-width-image-container mt-0"
        fluid={image.childImageSharp.fluid}
      >
        <h2 className="has-text-weight-bold is-size-1 page-title">{title}</h2>
      </BackgroundImage>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <PageContent className="content" content={content} />
              <GalleryComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

GalleryTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const Gallerypage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleryTemplate
        image={frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

Gallerypage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Gallerypage;

export const pageQuery = graphql`
  query Gallery($id: String!) {
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
