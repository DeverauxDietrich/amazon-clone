import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating}) {
  return (
    <div className="product">
        <p>{title}</p>
        <p className="product__">
            <small>R</small>
            <stong>{price}</stong>
        </p>
        <div className="product__rating">
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))
            }
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default Product