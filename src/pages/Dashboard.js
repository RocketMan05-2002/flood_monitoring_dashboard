import React, { useState, useEffect } from "react";
import StationSelector from "../components/StationSelector/StationSelector";
import MeasureSelector from "../components/MeasureSelector/MeasureSelector";
import ReadingsChart from "../components/ReadingsChart/ReadingsChart";
import ReadingsTable from "../components/ReadingsTable/ReadingsTable";
import { getReadings } from "../api";

const Dashboard = () => {
  const [selectedStation, setSelectedStation] = useState("");
  const [selectedMeasure, setSelectedMeasure] = useState("");
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    if (selectedMeasure) {
      getReadings(selectedMeasure).then((data) => {
        setReadings(data.map(r => ({
          Time: new Date(r.dateTime).toLocaleString(),
          Value: r.value
        })));
      });
    }
  }, [selectedMeasure]);

  return (
    <div className="container">
      <h1 className="mt-3">🌊 Flood Monitoring Dashboard</h1>

      <div className="row mt-4">
        <div className="col-md-6">
          <StationSelector onSelect={setSelectedStation} />
        </div>
        <div className="col-md-6">
          <MeasureSelector stationId={selectedStation} onSelect={setSelectedMeasure} />
        </div>
      </div>

      {readings.length > 0 ? (
        <>
          <ReadingsChart data={readings} />
          <ReadingsTable data={readings} />
        </>
      ) : (
        <p className="text-warning mt-4">No readings available for the selected measure.</p>
      )}
    </div>
  );
};

export default Dashboard;