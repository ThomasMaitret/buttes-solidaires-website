import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import siteMetadata from "../metadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = siteMetadata;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default TemplateWrapper;
