const CategoryFilter = ({ categories, setSelected, selected }) => {
  return (
    <div className="category-box">
      <h4>Categories</h4>

      <p
        className={selected === "all" ? "active" : ""}
        onClick={() => setSelected("all")}
      >
        All
      </p>

      {categories.map((cat) => (
        <p
          key={cat._id}
          className={selected === cat.name ? "active" : ""}
          onClick={() => setSelected(cat.name)}
        >
          {cat.name}
        </p>
      ))}
    </div>
  );
};

export default CategoryFilter;
