import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [carts, setCarts] = useState([]);

  const handleAddToCart = (product) => {
    setCarts(product);
  };
  console.log(carts.length);
  return (
    <div className="shop">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <h3>Summary Add Prod: {carts.length}</h3>
      </div>
    </div>
  );
};

export default Shop;
