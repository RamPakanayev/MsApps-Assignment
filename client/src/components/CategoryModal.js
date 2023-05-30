// client\src\components\CategoryModal.js
import React, { useState } from "react";

const CategoryModal = ({ onChange }) => {
 
  
  const [selectedCategory, setSelectedCategory] = useState("all");


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    onChange(selectedCategory);
    
  };

  return (
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
      
    </div>
  );
};

export default CategoryModal;
