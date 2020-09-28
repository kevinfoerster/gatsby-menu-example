import React from "react"
import style from "./Grid.module.css"

const Grid = ({ children }) => {
  return <div className={style.gridWrapper}>{children}</div>
}

export default Grid
