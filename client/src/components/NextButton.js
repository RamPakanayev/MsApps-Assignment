// client\src\components\NextButton.js
import React from "react";

const NextButton = ({ onClick }) => (
  <button className="next-button" onClick={onClick} style={{verticalAlign: 'middle'}}>
    <span>Next </span>
  </button>
);
export default NextButton;