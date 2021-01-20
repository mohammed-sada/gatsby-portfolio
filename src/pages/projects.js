import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {
  return <Layout>
    <SEO title="Projects" description="this is our projects page" />
    <section className="projects">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        id
        github
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }`
export default ProjectsPage
