import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    info: site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const info = props => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const { title, description, author } = data.info.siteMetadata
        return (
          <div>
            <h2>title: {title}</h2>
            <p>description: {description}</p>
            <h2>author: {author}</h2>
          </div>
        )
      }}
    />
  )
}

export default info
