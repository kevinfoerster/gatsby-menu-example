import React from "react"
import style from "./Headline.module.css"
const Headline = ({ children }) => {
  return <h2 className={`${style.headline}`}>{children}</h2>
}

export default Headline
