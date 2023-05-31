import React from "react";
import "./PrevButton.css";

const PrevButton = ({ onClick }) => (
  <button
    className="prev-button"
    onClick={onClick}
    style={{ verticalAlign: "middle" }}
  >
    <span>Prev </span>
  </button>
);

export default PrevButton;
