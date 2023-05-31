import React from "react";
import './NextButton.css';

const NextButton = ({ onClick }) => (
  <button className="next-button" onClick={onClick} style={{verticalAlign: 'middle'}}>
    <span>Next </span>
  </button>
);
export default NextButton;
