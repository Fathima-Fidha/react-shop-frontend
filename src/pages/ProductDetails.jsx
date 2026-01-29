import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.images[0]);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="details-container">
      

      <div className="details-card">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
        {/* LEFT IMAGES */}
        <div className="image-column">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="main-image">
          <img src={mainImage} alt={product.title} />
        </div>

        {/* INFO */}
        <div className="details-info">
          <h2>{product.title}</h2>
          <span className="tag">{product.category.name}</span>

          <p className="desc">{product.description}</p>

          <div className="details-footer">
  <p className="price">$ {product.price}</p>
  <button className="add-btn"
   onClick={() => navigate("/auth/login")}
  >Add To Cart</button>
</div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
