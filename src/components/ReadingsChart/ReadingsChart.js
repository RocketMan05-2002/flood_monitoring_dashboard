import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import './readingsChart.css'

const ReadingsChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Value" stroke="#8884d8" strokeWidth={2} dot={true} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReadingsChart;