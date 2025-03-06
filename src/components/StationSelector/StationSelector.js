import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getStations } from "../../api";
import "./stationSelector.css";

const StationSelector = ({ onSelect }) => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getStations().then(setStations);
  }, []);

  const options = stations.map((station) => ({
    value: station.notation,
    label: station.label,
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "var(--bg-light)",
      borderColor: state.isFocused ? "#007bff" : "#ccc",
      boxShadow: state.isFocused ? "0 0 5px rgba(0, 123, 255, 0.5)" : "none",
      "&:hover": {
        borderColor: "#007bff",
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
      placeholder="Select a Station"
      isClearable
      styles={customStyles}
    />
  );
};

export default StationSelector;