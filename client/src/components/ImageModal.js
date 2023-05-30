// client\src\components\ImageModal.js
import React, { useState } from "react";

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
    <div onClick={handleOpen}>
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
  );
};

export default ImageModal;
