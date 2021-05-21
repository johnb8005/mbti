import React from "../../_snowpack/pkg/react.js";
import * as T from "../lib/type.js";
import * as U from "../lib/utils.js";
import * as UiUtils from "../ui-utils.js";
import {listPersonalities, listCognitiveFunctions} from "../utils.js";
const CognitiveFunction = ({
  cognitiveFunction
}) => /* @__PURE__ */ React.createElement("div", {
  className: "col-md-3"
}, /* @__PURE__ */ React.createElement("h3", null, T.CognitiveFunction[cognitiveFunction]), /* @__PURE__ */ React.createElement("ul", {
  className: "list-group"
}, listPersonalities.filter((x) => cognitiveFunction === U.toDominant(U.toComponent(x))).map((x) => /* @__PURE__ */ React.createElement(UiUtils.PersonalitySmallRow, {
  key: x,
  mbti: x
}))));
const CognitiveFunctions = () => /* @__PURE__ */ React.createElement("div", {
  className: "row"
}, listCognitiveFunctions.map((role) => /* @__PURE__ */ React.createElement(CognitiveFunction, {
  cognitiveFunction: role,
  key: role
})));
export default CognitiveFunctions;
