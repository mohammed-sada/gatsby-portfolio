import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3 className="logo">&#60;/&#62; sada</h3>
          </Link>
          <button onClick={toggleSidebar} type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </div>
  )
}

export default Navbar
