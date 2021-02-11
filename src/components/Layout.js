import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
