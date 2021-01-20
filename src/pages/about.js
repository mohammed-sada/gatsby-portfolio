import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({ data: { about: { nodes } } }) => {

  const { title, info, image, stack } = nodes[0];

  return (
    <Layout>
      <SEO title="About" description="this is the about page" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <div className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {
                stack.map(item => {
                  return <span key={item.id}>{item.name}</span>
                })
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    about:allStrapiAbout {
      nodes
      {
        info
        title
        stack {
          id
          name
        }
        image {
          childImageSharp {
            fluid (grayscale: true){
              ...GatsbyImageSharpFluid
            }
          }
        }
       }
      }
   
    }
    `

export default About
