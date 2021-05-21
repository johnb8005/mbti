import React from "../_snowpack/pkg/react.js";
import * as T from "./lib/type.js";
import * as U from "./lib/utils.js";
import {SourceCodeLink} from "./gh-utils.js";
const listPersonalities = Object.values(T.MBTI).filter((x) => typeof x !== "string").map((x) => x);
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", null, listPersonalities.map((x) => /* @__PURE__ */ React.createElement("li", null, T.MBTI[x], " - Role: ", T.Role[U.getRole(U.toComponent(x))]))), /* @__PURE__ */ React.createElement(SourceCodeLink, null));
};
