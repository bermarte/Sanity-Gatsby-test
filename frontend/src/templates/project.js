import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'

export const query = graphql`
query ($slug: String) {
  sanityProject(slug: { eq: $slug }) {
    title
    description
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
}
`

export default ({ data }) => {
  return (
    <Layout>
      <Image fluid={data.sanityProject.image.asset.fluid} alt="image" />
      <h1>{data.sanityProject.title}</h1>
      <p>{data.sanityProject.description}</p>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}