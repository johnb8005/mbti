import React from "react";

import Chart from "./components/charts/bar-chart";
import ChartGrouped from "./components/charts/bar-chart-grouped";
import * as Income from "./lib/income";
import * as T from "./lib/type";

const getIncomeByAgeBracket = (): { label: string; data: number[] }[] => {
  const idxs = [1, 2, 3, 4, 5, 6];

  return idxs.map((idx) => {
    const data: number[] = Income.averageIncomes.map((x) => x[idx]);
    const label = Income.averageIncomesLabels[idx];

    return { data, label };
  });
};

export default () => {
  const incomes = Income.incomes.map(([_mbti, income]) => income.incomes.value);
  const labels = Income.incomes.map(([mbti]) => T.MBTI[mbti]);

  const above150 = Income.incomeAbove150k.map(([_1, _2, value]) => value);
  const below150 = Income.incomeUnder15k.map(([_1, _2, value]) => value);

  return (
    <>
      <h2>Income for the different MBTI types</h2>
      <p>
        Source:{" "}
        <a href="https://www.truity.com/sites/default/files/fillpdf/personalityandincomereport2019.pdf">
          <i className="fa fa-link" />
        </a>
      </p>
      <h4>Average Income By Personality (age 21+)</h4>
      <Chart labels={labels} data={incomes} />
      <h4>Percentage of Each Type Earning $150k+ (Respondants Age 30-59)</h4>
      <Chart labels={labels} data={above150} />
      <h4>
        Percentage of Each Type Earning less than $15k (Respondants Age 21+)
      </h4>
      <Chart labels={labels} data={below150} />
      <h4>Income by age bracket</h4>
      <ChartGrouped labels={labels} datasets={getIncomeByAgeBracket()} />
    </>
  );
};
