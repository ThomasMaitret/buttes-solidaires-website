import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container mt-0"
          style={{
            backgroundImage: `url('/img/nichoir.jpg')`,
          }}
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
            Blog
          </h2>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
