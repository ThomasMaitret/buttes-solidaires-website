import React from "react";
import Layout from "components/Layout";
import Image from "next/image";

const PageTemplate = ({ children, image, title }) => {
  return (
    <Layout>
      <div className="image-container">
        <Image src={image} layout="fill" objectFit="cover" />
        <h2 className="page-title">{title}</h2>
      </div>
      <div className="container mx-auto mb-10">
        <div className="flex flex-wrap justify-center">
          <article className="content prose prose-lg max-w-none">
            {children}
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default PageTemplate;
