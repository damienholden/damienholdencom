import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
       <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
