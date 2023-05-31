// client\src\components\ImageGrid.js

// Import necessary libraries and CSS styles
import React from "react";
import ImageModal from "../ImageModal/ImageModal";
import "./ImageGrid.css";

// Define the ImageGrid component. It receives a list of images as a prop.
// Check if images is an array and map each image to an ImageModal component.
// Only the first 9 images are displayed.
const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {Array.isArray(images) &&
        images
          .slice(0, 9)
          .map((image) => <ImageModal key={image.id} image={image} />)}
    </div>
  );
};

export default ImageGrid;
