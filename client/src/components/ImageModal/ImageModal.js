// client\src\components\ImageModal.js

import React, { useState } from "react";
import Modal from "react-modal";
import "./ImageModal.css";

Modal.setAppElement("#root"); // This line is important for accessibility purposes

const ImageModal = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div onClick={handleOpen}>
      <img src={image.webformatURL} alt="" />
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className="modal-content-wrapper"
      >
        <h2>Image Details</h2>
        <p>Views: {image.views}</p>
        <p>Downloads: {image.downloads}</p>
        <p>Likes: {image.likes}</p>
        <p>Tags: {image.tags}</p>
        <p>User: {image.user}</p>
        <button onClick={handleClose}>Close</button>
      </Modal>
    </div>
  );
};

export default ImageModal;
