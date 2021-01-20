import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h1>{title || "Default Title"}</h1>
      <div className="underline"></div>
    </div>
  )
}

export default Title
