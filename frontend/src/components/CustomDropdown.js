import React, { useState } from 'react';
import '../styles/CustomDropdown.css'

const CustomDropdown = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="custom-dropdown">
      <select value={selectedValue} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
