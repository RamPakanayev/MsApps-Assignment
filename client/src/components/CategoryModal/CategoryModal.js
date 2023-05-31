import React, { useState } from "react";
import Modal from "react-modal";
import "./CategoryModal.css";

Modal.setAppElement("#root"); // This line is important for accessibility purposes, it prevents screen readers from reading content outside of the Modal

// CategoryModal component
const CategoryModal = ({ isOpen, onChange, onClose }) => {
  const categories = [
    "All",
    "Animals",
    "Sport",
    "Work",
    "Astronomy",
    "Skyscraper",
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = () => {
    onChange(selectedCategory);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="category-modal-main"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)", // this will make the overlay darker
        },
      }}
    >
      <h2 className="modal-title">Select category :</h2>
      <div className="category-modal-content">
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
    // This commented section can be used if we need to switch to an input field for selecting categories
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
