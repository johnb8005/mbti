import React from "../_snowpack/pkg/react.js";
import Chart from "./components/charts/bar-chart.js";
import * as Iq from "./lib/iq.js";
import * as T from "./lib/type.js";
export default () => {
  const gifted = Iq.iqsDist.map(([_mbti, _n, gifted2, norm]) => gifted2 / norm);
  const labels = Iq.iqsDist.map(([mbti]) => T.MBTI[mbti]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Income for the different MBTI types"), /* @__PURE__ */ React.createElement("p", null, "Source:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.quora.com/Whats-the-relationship-between-an-MBTI-and-IQ"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link"
  }))), /* @__PURE__ */ React.createElement("h4", null, "Gifted/Norm"), /* @__PURE__ */ React.createElement(Chart, {
    labels,
    data: gifted
  }));
};
