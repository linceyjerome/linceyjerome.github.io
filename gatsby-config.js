require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `My Personal Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId":process.env.CONTENTFUL_SPACE_ID
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/LJLogo.png",
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        purgeCSSOptions: {
          safelist: ['ul', 'h4', 'li'], // Don't remove this selector
        },
      },
    }
  ]
};