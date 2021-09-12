import React from "react";

import Chart from "./components/charts/bar-chart";
import * as Iq from "./lib/iq";
import * as T from "./lib/type";

export default () => {
  const gifted = Iq.iqsDist.map(([_mbti, _n, gifted, norm]) => gifted / norm);
  const labels = Iq.iqsDist.map(([mbti]) => T.MBTI[mbti]);

  return (
    <>
      <h2>Income for the different MBTI types</h2>
      <p>
        Source:{" "}
        <a href="https://www.quora.com/Whats-the-relationship-between-an-MBTI-and-IQ">
          <i className="fa fa-link" />
        </a>
      </p>
      <h4>Gifted/Norm</h4>
      <Chart labels={labels} data={gifted} />
    </>
  );
};
