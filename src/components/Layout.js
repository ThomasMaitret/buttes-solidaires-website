import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import "./all.css";

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="fr" />
        <title>Buttes solidaires</title>
        <meta
          name="description"
          content="Les buttes solidaires: Permaculture, vente de plants et jardinage à domicile"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.png"
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Navbar />
      <div class="mb-8">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default TemplateWrapper;
