import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="card"
    onClick={() => navigate(`/products/${product.id}`)}
      style={{ cursor: "pointer" }}
      >
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 40)}...</p>
      <span className="tag">{product.category.name}</span>
      <div className="card-footer">
        <span className="price">$ {product.price}</span>
        <button className="add-btn"
         onClick={(e) => {
          e.stopPropagation();
          navigate("/auth/login");
        }}
        >
        Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
