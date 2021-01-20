import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, desc, image, category, date, slug }) => {
  return <Link to={`/blogs/${slug}`} className="blog">
    <article >
      {
        image && <Image fluid={image.childImageSharp.fluid} className="blog-img" key={id} />
      }
      <div className="blog-card">
        <h4>{title || "Default Title"}</h4>
        <p>{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
export default Blog
