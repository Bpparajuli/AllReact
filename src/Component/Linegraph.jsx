import React from "react";
import { Line } from "react-chartjs-2";
import { LinegraphData } from "./LinegraphData.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Linegraph = () => {
  const options = {};
  return (
    <>
      <Line options={options} data={LinegraphData} />;
    </>
  );
};

export default Linegraph;
