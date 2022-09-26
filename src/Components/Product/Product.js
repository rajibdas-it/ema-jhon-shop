import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, name, price, ratings, seller } = props.product;

  return (
    <div className="product">
      <img src={img ? img : "no img found"} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
