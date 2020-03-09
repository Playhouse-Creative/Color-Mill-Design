exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      tags: [String!]!
    }
  `
  createTypes(typeDefs)
}
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `contentfulCaseStudy`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulCaseStudy {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulCaseStudy.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/caseStudy.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}


// exports.createPages = ({graphql, actions}) => {
//   const {createPage} = actions
//   return new Promise((resolve, reject) => {
//     const caseStudyTemplate = path.resolve('src/templates/caseStudy.js')
//     resolve(
//       graphql(`
//         {
//   allContentfulCaseStudy {
//     edges {
//       node {
//         description {
//           description
//         }
//         slug
//         title
//         gallery {
//           fluid {
//             srcSetWebp
//           }
//         }
//       }
//     }
//   }
// }

//       `).then((result) => {
//         if (result.errors) {
//           reject(result.errors)
//         }
//         result.data.allContentfulCaseStudy.edges.forEach((edge) => {
//           createPage ({
//             path: edge.node.title.toLowerCase(),
//             component: caseStudyTemplate,
//             context: {
//               slug: edge.node.title
//             }
//           })
//         })
//         return
//       })
//     )
//   })
// }