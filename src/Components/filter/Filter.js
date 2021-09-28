import React from "react";

const Filter = ({ handleInputChange, filter }) => {
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;
