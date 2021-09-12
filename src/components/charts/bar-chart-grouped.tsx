import React from "react";
import { Bar } from "react-chartjs-2";
import { Dataset } from "./type";
import {
  backgroundColor,
  borderColor,
  optionsVertical,
  optionsHorizontal,
} from "./options";

const VerticalGroupedBar = ({
  datasets,
  labels,
  isHorizontal = false,
}: {
  labels: string[];
  datasets: Pick<Dataset, "label" | "data">[];
  isHorizontal?: boolean;
}) => {
  const options = isHorizontal ? optionsHorizontal : optionsVertical;

  const datasetsFinal: Dataset[] = datasets.map((dataset, i) => {
    return {
      label: dataset.label,
      data: dataset.data,
      backgroundColor: backgroundColor[i % backgroundColor.length],
      borderColor: backgroundColor[i % borderColor.length],
      borderWidth: 1,
    };
  });

  const bardata = {
    labels,
    datasets: datasetsFinal,
  };

  return <Bar data={bardata} options={options} />;
};

export default VerticalGroupedBar;
