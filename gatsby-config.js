module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-preact`,
    `gatsby-plugin-postcss`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
              withWebp: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
