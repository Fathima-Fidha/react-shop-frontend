
import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../services/api";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  const filteredProducts =
    selected === "all"
      ? products
      : products.filter(
          (p) => p.category === selected
        );

  return (
    <div className="wrapper">
        <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    <div className="container">
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CategoryFilter
        categories={categories}
        setSelected={setSelected}
      />
    </div>
    </div>
  );
};

export default Products;
