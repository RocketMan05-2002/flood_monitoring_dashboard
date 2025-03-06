import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getMeasures } from "../../api";
import "./measureSelector.css";

const MeasureSelector = ({ stationId, onSelect }) => {
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    if (stationId) {
      getMeasures(stationId).then(setMeasures);
    }
  }, [stationId]);

  const options = measures.map((measure) => ({
    value: measure.notation,
    label: `${measure.label} (${measure.unitName})`,
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled ? "#f0f0f0" : "var(--bg-light)",
      borderColor: state.isFocused ? "#007bff" : "#ccc",
      boxShadow: state.isFocused ? "0 0 5px rgba(0, 123, 255, 0.5)" : "none",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      "&:hover": {
        borderColor: state.isDisabled ? "#ccc" : "#007bff",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--bg-light)",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#007bff"
        : state.isFocused
        ? "#e0f3ff"
        : "white",
      color: state.isSelected ? "white" : "#333",
      padding: 10,
    }),
  };

  return (
    <Select
      options={options}
      onChange={(selected) => onSelect(selected?.value || "")}
      placeholder="Select a Measure"
      isClearable
      isDisabled={!stationId}
      styles={customStyles}
    />
  );
};

export default MeasureSelector;