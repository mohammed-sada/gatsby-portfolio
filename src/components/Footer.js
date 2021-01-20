import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks />
      <div>
        <h4>copyright&copy; {new Date().getFullYear()} <span>WebDev</span> all rights reserved</h4>
      </div>
    </footer>
  )
}

export default Footer
