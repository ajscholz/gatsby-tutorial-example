import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const images = ({ data }) => {
  const images = data.allFile.edges

  return (
    <Layout>
      <h1>All the images</h1>
      {images.map(({ node }, index) => {
        return <h3 key={index}>{node.relativePath}</h3>
      })}
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
export default images
