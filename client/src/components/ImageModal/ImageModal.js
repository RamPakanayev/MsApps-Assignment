// Import necessary libraries and CSS styles
import React, { useState } from "react";
import Modal from "react-modal";
import "./ImageModal.css";

// Set the root element for the Modal for accessibility purposes
Modal.setAppElement("#root");

// Define the ImageModal component. It receives an image as a prop.
const ImageModal = ({ image }) => {
  // Set up a state variable to control whether the modal is open
  const [isOpen, setIsOpen] = useState(false);

  // Define the function to open the modal
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Define the function to close the modal. It stops the event propagation to prevent triggering the open function.
  const handleClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  // Render the component
  return (
    // The modal container. When clicked, it opens the modal.
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
            backgroundColor: "rgba(0, 0, 0, 0.75)", // this will make the overlay darker
          },
        }}
      >
        {/* The container for the image details */}
        <div className="modal-info">
          <h2 ClassName="modal-info-title">Image Details</h2>
          <div className="modal-info-info">
            <p>Views: {image.views}</p>
            <p>Downloads: {image.downloads}</p>
            <p>Likes: {image.likes}</p>
            <p>Tags: {image.tags}</p>
            <p>User: {image.user}</p>
          </div>
          <button onClick={handleClose}>Close</button>
        </div>
        <img className="modal-image" src={image.webformatURL} alt="" />
      </Modal>
    </div>
  );
};

// Export the ImageModal component
export default ImageModal;
