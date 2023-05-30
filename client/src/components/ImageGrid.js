// client\src\components\ImageGrid.js
import React from "react";
// import { useSelector } from "react-redux";
import ImageModal from "./ImageModal";

const ImageGrid = ({ images }) => {
  console.log(images); // Add this line
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {Array.isArray(images) && images.slice(0, 9).map((image) => (
        <ImageModal key={image.id} image={image} />
      ))}
    </div>
  );
};


export default ImageGrid;
