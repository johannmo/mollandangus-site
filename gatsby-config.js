module.exports = {
  pathPrefix: "/mollandangus-site",
  siteMetadata: {
    title: "Molland Angus",
    siteUrl: "https://example.com",
    description: "Molland Angus – naturlig storfekjøtt fra Mollandsmarki",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Molland Angus",
        short_name: "Molland Angus",
        start_url: "/",
        background_color: "#f7f2e8",
        theme_color: "#0b2530",
        display: "minimal-ui",
        icon: "src/images/hero-fjord-cow.png",
      },
    },
  ],
};
