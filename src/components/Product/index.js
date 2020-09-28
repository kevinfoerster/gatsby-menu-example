import React from "react"
import style from "./Product.module.css"
import PropTypes from 'prop-types'

const Product = ({ name, size, price, description, special }) => {

  return (
    <div
      className={`${style.product} ${special ? style.specialProduct : null}`}
    >
      <div className={style.productName}>
        <div>{name}</div>

        {description ? <small>{description}</small> : null}
      </div>
      {size ? <div className={style.productSize}>{size}</div> : null}

      <div className={style.productPrice}>
        {new Intl.NumberFormat("de-DE", {
          style: "decimal",
          maximumFractionDigits: 1,
          minimumFractionDigits: 1,
        }).format(price)}
      </div>
    </div>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  price: PropTypes.number.isRequired,
  special: PropTypes.bool,
  description: PropTypes.string,
}

Product.defaultProps = {
  special: false,
  size: '',
  description: ''
}
export default Product
