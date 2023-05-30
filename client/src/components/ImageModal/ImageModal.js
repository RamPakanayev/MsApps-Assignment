// client\src\components\ImageModal.js
import React, { useState } from "react";
import "./ImageModal.css";

const ImageModal = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(image);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="image-modal" onClick={handleOpen}>
      <div className={`modal-content-wrapper ${isOpen ? "open" : ""}`}>
      <img src={image.webformatURL} alt="" />
      
        {isOpen && (
          <div>
            <h2>Image Details</h2>
            <p>Views: {image.views}</p>
            <p>Downloads: {image.downloads}</p>
            <p>Likes: {image.likes}</p>
            <p>Tags: {image.tags}</p>
            <p>User: {image.user}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
