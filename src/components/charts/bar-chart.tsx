import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartProps, Dataset } from "./type";
import {
  backgroundColor,
  borderColor,
  optionsVertical,
  optionsHorizontal,
} from "./options";

const VerticalBar = ({
  label = "Count",
  data,
  labels,
  isHorizontal = false,
}: ChartProps & { isHorizontal?: boolean }) => {
  const options = isHorizontal ? optionsHorizontal : optionsVertical;

  const datasets: Dataset[] = [
    {
      label,
      data,
      backgroundColor,
      borderColor,
      borderWidth: 1,
    },
  ];

  const bardata = {
    labels,
    datasets,
  };

  return <Bar data={bardata} options={options} />;
};

export default VerticalBar;
