import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderImage from "../components/HeaderImage";

const Page = ({ data }) => {
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
        title
      }
    }
  }
`;
