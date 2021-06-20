import React from "../../../_snowpack/pkg/react.js";
import * as SVG from "../../../_snowpack/pkg/@nexys/svg.js";
import {ZodiacSign} from "../../lib/zodiac/type.js";
import {elementColors} from "../utils.js";
const radius = 200;
const offsetRatio = 0.1;
const c = {x: radius * (1 + offsetRatio), y: radius * (1 + offsetRatio)};
const circleDivides = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const Text = ({
  i,
  x,
  y,
  onClick
}) => /* @__PURE__ */ React.createElement("text", {
  x,
  y,
  onClick: onClick && (() => onClick(i)),
  style: {cursor: "pointer"}
}, ZodiacSign[i]);
export default () => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: 600
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, circleDivides.map((i) => {
    const s1 = {
      x: radius * (1.1 + Math.cos(-Math.PI / 2 + i * Math.PI / 6)),
      y: radius * (1.1 + Math.sin(-Math.PI / 2 + i * Math.PI / 6))
    };
    const color = elementColors[i % 4];
    return /* @__PURE__ */ React.createElement("svg", {
      key: i
    }, /* @__PURE__ */ React.createElement(Text, {
      x: 1.05 * s1.x,
      y: 1.05 * s1.y,
      i
    }), /* @__PURE__ */ React.createElement(SVG.Circle, {
      r: 2,
      coord: s1,
      stroke: color
    }), /* @__PURE__ */ React.createElement(SVG.Line, {
      p1: s1,
      p2: c,
      stroke: color
    }));
  })));
};
