import * as React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


export const query = graphql`{

    allSanityProject {
      edges {
        node {
          title
          description
          slug
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }  
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <h1>My Portfolio</h1>
    <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'space-between', padding: 0 }}>
    {data.allSanityProject.edges.map(({ node: project }) => {
      return (
        <li 
          key={project.slug}
          style={{ 
            flex: '1 45%', 
            flexWrap: 'wrap', 
            maxWidth: '45%', 
            margin: '1rem' }}>
          <Link to={`/${project.slug}`}>
            <h2 style={{ fontSize: '24px' }}>{project.title}</h2>
          </Link>
          <Image fluid={project.image.asset.fluid} />
          <p style={{ marginTop: "1rem"}}>{project.description}</p>
          Link to project: <Link to={`/${project.slug}`}>{project.slug}</Link>

        </li>
      )})
    
    }
    </ul> 
  </Layout>
)

export default IndexPage
