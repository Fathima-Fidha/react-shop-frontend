import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 40)}...</p>
      <span className="tag">{product.category.name}</span>
      <div className="card-footer">
        <span className="price">$ {product.price}</span>
        <button className="add-btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
