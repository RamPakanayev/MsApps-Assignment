// client\src\components\ImageModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./ImageModal.css";

Modal.setAppElement("#root");

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
    <div className="modal-container" onClick={handleOpen}>
      <img src={image.webformatURL} alt="" />
      <div className="modal-overlay">
        <p>Click for info</p>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className="modal-content-wrapper"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // this will make the overlay darker
          },
        }}
      >
        <div className="modal-info">
          <h2>Image Details</h2>
          <p>Views: {image.views}</p>
          <p>Downloads: {image.downloads}</p>
          <p>Likes: {image.likes}</p>
          <p>Tags: {image.tags}</p>
          <p>User: {image.user}</p>
          <button onClick={handleClose}>Close</button>
        </div>
        <img className="modal-image" src={image.webformatURL} alt="" />
      </Modal>
    </div>
  );
};

export default ImageModal;
