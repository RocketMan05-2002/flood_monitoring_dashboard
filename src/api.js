import axios from "axios";

const BASE_URL = "https://environment.data.gov.uk/flood-monitoring/id";

export const getStations = async () => {
  const response = await axios.get(`${BASE_URL}/stations`);
  return response.data.items || [];
};

export const getMeasures = async (stationId) => {
  const response = await axios.get(
    `${BASE_URL}/stations/${stationId}/measures`
  );
  return response.data.items || [];
};

export const getReadings = async (measureId) => {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const response = await axios.get(
    `${BASE_URL}/measures/${measureId}/readings?_sorted&since=${since}`
  );
  return response.data.items || [];
};
