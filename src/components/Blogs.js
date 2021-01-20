import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return <section className="section">
    <Title title={title} />
    <div className="section-center blogs-center">
      {
        blogs.map(blog => {
          return <Blog {...blog} key={blog.id} />
        })
      }
    </div>
    <div>
      {
        showLink && <Link to="/blog" className="btn center-btn">blogs</Link>
      }
    </div>
  </section>
}
export default Blogs
