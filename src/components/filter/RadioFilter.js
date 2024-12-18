import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/global.css";

function RadioFilter({
  className = "",
  buttons,
  handleFilterChange,
  defaultCheckedValue,
}) {
  return (
    <div className={`filter ${className}`}>
      {buttons.map((button, index) => (
        <label key={index} className="filterLabel">
          <input
            type="radio"
            name="filterList"
            value={button.value}
            onChange={handleFilterChange}
            defaultChecked={button.value === defaultCheckedValue} // Handle default checked based on value
          />
          <span>{button.label}</span>
        </label>
      ))}
    </div>
  );
}

RadioFilter.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  defaultCheckedValue: PropTypes.string, // optional for default selected radio button
};

export default RadioFilter;
