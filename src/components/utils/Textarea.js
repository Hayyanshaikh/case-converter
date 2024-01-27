import React, { useState } from 'react';

const Textarea = ({ onChange,read,value,disabled }) => {

  const handleTextChange = (event) => {
    onChange(event);
  };

  return (
    <textarea
      value={value}
      onChange={handleTextChange}
      placeholder="Enter your text here..."
      className="textarea"
      readOnly={read}
      disabled={disabled}
    ></textarea>
  );
};

export default Textarea;
