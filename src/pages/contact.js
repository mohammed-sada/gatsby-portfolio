import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="this is the contact page" />

      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/maylpyew" method="POST">
            <div className="form-group">
              <input type="name" name="name" placeholder="name" className="form-control" required />
              <input type="email" name="email" placeholder="email" className="form-control" required />
              <textarea name="message" className="form-control" rows="5" placeholder="messgae" required></textarea>
            </div>
            <button type="submit" className="submit-btn btn">submit here</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
