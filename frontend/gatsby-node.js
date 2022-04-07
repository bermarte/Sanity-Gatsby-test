const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
  query {
    allSanityProject {
      edges {
        node {    
          slug
        }
      }
    }
  }
  `)

  const projects = result.data.allSanityProject.edges.map(({ node }) => node)
  projects.forEach(project => {
    actions.createPage({
      path: project.slug,
      component: path.resolve('./src/templates/project.js'),
      context: {
        slug: project.slug
      }
    })
  })
}