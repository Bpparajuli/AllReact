import React from "react";
import { Line } from "react-chartjs-2";
import { FakeData } from "./FakeData.jsx";
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
      <Line options={options} data={FakeData} />;
    </>
  );
};

export default Linegraph;
