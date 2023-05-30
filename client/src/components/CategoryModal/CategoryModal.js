// client\src\components\CategoryModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./CategoryModal.css";

Modal.setAppElement("#root"); // This line is important for accessibility purposes

const CategoryModal = ({ isOpen, onChange, onClose }) => {
  const categories = ["all", "animals", "sport", "work"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    onChange(selectedCategory);
    onClose();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      background: '#f0f0f0',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%', // here you can set the width of the modal
      height: '25%', // and here you can set the height
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // this sets the background color of the overlay
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      style={customStyles} // apply the custom styles here
    >
       <h2>Select category :</h2>
      <div className="category-modal">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>OK</button>
      </div>
    </Modal>
  );
};

export default CategoryModal;


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
