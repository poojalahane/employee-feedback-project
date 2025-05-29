import React from "react";

const FilterDropdown = ({ selected, setSelected }) => {
  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="dropdown"
    >
      <option value="">All Categories</option>
      <option value="Work Environment">Work Environment</option>
      <option value="Leadership">Leadership</option>
      <option value="Growth">Growth</option>
      <option value="Others">Others</option>
    </select>
  );
};

export default FilterDropdown;
