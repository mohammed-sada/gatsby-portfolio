import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return (
    <Layout>
      <SEO title="Blog" description="this is our blog page" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blogs" />
      </section>
    </Layout>
  )
}

export const query = graphql`
{
    allStrapiBlogs {
      nodes {
        category
        date(formatString: "MMM do, yyyy")
        desc
        id
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog

