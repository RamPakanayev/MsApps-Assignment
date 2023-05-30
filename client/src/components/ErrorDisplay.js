// client\src\components\ErrorDisplay.js
import React from "react";

const ErrorDisplay = ({ error }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorDisplay;
