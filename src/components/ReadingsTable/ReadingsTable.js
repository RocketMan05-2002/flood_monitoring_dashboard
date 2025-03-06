import React from "react";
import './readingsTable.css'

const ReadingsTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Time</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Time}</td>
              <td>{row.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadingsTable;