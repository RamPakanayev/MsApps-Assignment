// client\src\components\ImageGrid.js
import React from "react";
import ImageModal from "../ImageModal/ImageModal";
import './ImageGrid.css';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {Array.isArray(images) && images.slice(0, 9).map((image) => (
        <ImageModal key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;

