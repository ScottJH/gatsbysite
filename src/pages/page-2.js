import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Best day ever</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/etf9rcbhfTM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
