// components/SubmitButton.js
import React from 'react';

const SubmitButton = ({ text = "Submit", className = "", ...props }) => {
  return (
    <button type="submit" className={`cta-button px-5 ${className}`} {...props}>
      {text}
    </button>
  );
};

export default SubmitButton;