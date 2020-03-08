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

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/templates/caseStudy.js')
    resolve(
      graphql(`
        {
          allContentfulCaseStudy (limit:100) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulCaseStudy.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: caseStudyTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}