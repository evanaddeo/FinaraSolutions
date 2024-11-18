import React, { useState } from 'react';
import '../styles/CustomDropdown.css'

const CustomDropdown = ({ options, onChange, update}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className="custom-dropdown">
        <select 
            value={selectedValue} 
            onChange={(e) => {
                const newValue = e.target.value;
                setSelectedValue(newValue);
                onChange(newValue);
            }}
            onClick={update}
        >
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
