import React from "react";

const Button = ({ className, text, onClick }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
