
// client\src\components\PrevButton.js
import React from "react";

const PrevButton = ({ onClick }) => (
  <button className="prev-button" onClick={onClick} style={{verticalAlign: 'middle'}}>
    <span>Prev </span>
  </button>
);

export default PrevButton;