import React from "../../../_snowpack/pkg/react.js";
import {Bar} from "../../../_snowpack/pkg/react-chartjs-2.js";
import {
  backgroundColor,
  borderColor,
  optionsVertical,
  optionsHorizontal
} from "./options.js";
const VerticalGroupedBar = ({
  datasets,
  labels,
  isHorizontal = false
}) => {
  const options = isHorizontal ? optionsHorizontal : optionsVertical;
  const datasetsFinal = datasets.map((dataset, i) => {
    return {
      label: dataset.label,
      data: dataset.data,
      backgroundColor: backgroundColor[i % backgroundColor.length],
      borderColor: backgroundColor[i % borderColor.length],
      borderWidth: 1
    };
  });
  const bardata = {
    labels,
    datasets: datasetsFinal
  };
  return /* @__PURE__ */ React.createElement(Bar, {
    data: bardata,
    options
  });
};
export default VerticalGroupedBar;
