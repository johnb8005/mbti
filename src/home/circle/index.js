import React from "../../../_snowpack/pkg/react.js";
import {Redirect} from "../../../_snowpack/pkg/react-router-dom.js";
import * as SVG from "../../../_snowpack/pkg/@nexys/svg.js";
import {MBTI} from "../../lib/type.js";
const radius = 200;
const offsetRatio = 0.1;
const c = {x: radius * (1 + offsetRatio), y: radius * (1 + offsetRatio)};
const circleDivides = [0, 1, 2, 3, 4, 5, 6, 7];
const Text = ({
  i,
  x,
  y,
  onClick
}) => /* @__PURE__ */ React.createElement("text", {
  x,
  y,
  onClick: () => onClick(i),
  style: {cursor: "pointer"}
}, MBTI[i]);
export default () => {
  const [selected, setSelected] = React.useState(void 0);
  if (selected) {
    return /* @__PURE__ */ React.createElement(Redirect, {
      to: `/${selected}/detail`
    });
  }
  return /* @__PURE__ */ React.createElement(SVG.Layout, null, /* @__PURE__ */ React.createElement(SVG.Circle, {
    r: radius,
    coord: c
  }), /* @__PURE__ */ React.createElement(React.Fragment, null, circleDivides.map((i) => {
    const s1 = {
      x: radius * (1.1 + Math.cos(i * Math.PI / 8)),
      y: radius * (1.1 + Math.sin(i * Math.PI / 8))
    };
    const s2 = {
      x: radius * (1.1 - Math.cos(i * Math.PI / 8)),
      y: radius * (1.1 - Math.sin(i * Math.PI / 8))
    };
    return /* @__PURE__ */ React.createElement("svg", {
      key: i
    }, /* @__PURE__ */ React.createElement(Text, {
      x: 1.05 * s1.x,
      y: 1.05 * s1.y,
      i: i + 8,
      onClick: setSelected
    }), /* @__PURE__ */ React.createElement(Text, {
      x: 1.05 * s2.x,
      y: 1.05 * s2.y,
      i,
      onClick: setSelected
    }), /* @__PURE__ */ React.createElement(SVG.Circle, {
      r: 2,
      coord: s1,
      stroke: "red"
    }), /* @__PURE__ */ React.createElement(SVG.Circle, {
      r: 2,
      coord: s2,
      stroke: "red"
    }), /* @__PURE__ */ React.createElement(SVG.Line, {
      p1: s1,
      p2: s2
    }));
  })));
};
