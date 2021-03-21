import React, { Suspense } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderImage from "../components/HeaderImage";

const Page = ({ data }) => {
  const { markdownRemark: page } = data;
  let content;

  const isGalleryPage = page.frontmatter.title === "Galerie";
  if (isGalleryPage) {
    const GalleryComponent = React.lazy(() => import("../components/Gallery"));
    content = (
      <Suspense>
        <GalleryComponent />
      </Suspense>
    );
  } else {
    content = (
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: page.html }}
      ></div>
    );
  }

  return (
    <Layout>
      <HeaderImage
        image={page.frontmatter.image.childImageSharp.gatsbyImageData}
        text={page.frontmatter.title}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <article className="content">{content}</article>
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
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 5.4, quality: 75)
          }
        }
        title
      }
    }
  }
`;
