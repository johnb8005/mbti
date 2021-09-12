import React from "../_snowpack/pkg/react.js";
import Chart from "./components/charts/bar-chart.js";
import ChartGrouped from "./components/charts/bar-chart-grouped.js";
import * as Income from "./lib/income.js";
import * as T from "./lib/type.js";
const getIncomeByAgeBracket = () => {
  const idxs = [1, 2, 3, 4, 5, 6];
  return idxs.map((idx) => {
    const data = Income.averageIncomes.map((x) => x[idx]);
    const label = Income.averageIncomesLabels[idx];
    return {data, label};
  });
};
export default () => {
  const incomes = Income.incomes.map(([_mbti, income]) => income.incomes.value);
  const labels = Income.incomes.map(([mbti]) => T.MBTI[mbti]);
  const above150 = Income.incomeAbove150k.map(([_1, _2, value]) => value);
  const below150 = Income.incomeUnder15k.map(([_1, _2, value]) => value);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Income for the different MBTI types"), /* @__PURE__ */ React.createElement("p", null, "Source:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.truity.com/sites/default/files/fillpdf/personalityandincomereport2019.pdf"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link"
  }))), /* @__PURE__ */ React.createElement("h4", null, "Average Income By Personality (age 21+)"), /* @__PURE__ */ React.createElement(Chart, {
    labels,
    data: incomes
  }), /* @__PURE__ */ React.createElement("h4", null, "Percentage of Each Type Earning $150k+ (Respondants Age 30-59)"), /* @__PURE__ */ React.createElement(Chart, {
    labels,
    data: above150
  }), /* @__PURE__ */ React.createElement("h4", null, "Percentage of Each Type Earning $150k+ (Respondants Age 21+)"), /* @__PURE__ */ React.createElement(Chart, {
    labels,
    data: below150
  }), /* @__PURE__ */ React.createElement("h4", null, "Percentage of Each Type Earning $150k+ (Respondants Age 21+)"), /* @__PURE__ */ React.createElement(ChartGrouped, {
    labels,
    datasets: getIncomeByAgeBracket()
  }));
};
