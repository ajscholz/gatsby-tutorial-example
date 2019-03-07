import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

export default function testing() {
  return (
    <Layout>
      <h1>hello from testing</h1>
      <Link to="/">back to homepage</Link>
    </Layout>
  )
}
