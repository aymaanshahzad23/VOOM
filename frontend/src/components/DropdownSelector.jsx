// src/components/DropdownSelector.jsx
import React from 'react';

const locations = [
  "IIT Bombay",
  "DMart Powai",
  "Mumbai Airport",
  "Andheri Station",
  "Hiranandani Hospital"
];

const DropdownSelector = ({ label, selected, setSelected }) => (
  <div>
    <label>{label}</label>
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      <option value="">Select location</option>
      {locations.map((loc, i) => (
        <option key={i} value={loc}>{loc}</option>
      ))}
    </select>
  </div>
);

export default DropdownSelector;
