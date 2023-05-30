// client\src\components\CategoryModal.js
import React, { useState } from "react";

const CategoryModal = ({ onChange }) => {
  const categories = ["all", "animals", "sport", "work"];
  const [selectedCategory, setSelectedCategory] = useState("all");
  

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    onChange(selectedCategory);
  };

  return (
    /* for input:
    <div>
        <div>
          <input
            type="text"
            value={selectedCategory}
            onChange={handleCategoryChange}
            placeholder="Enter category..."
          />
          <button onClick={handleSubmit}>OK</button>
        </div>
    </div>*/ 

    <div>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>OK</button>
      </div>
    </div>
  );
};

export default CategoryModal;
