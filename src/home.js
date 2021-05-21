import React from "../_snowpack/pkg/react.js";
import * as T from "./lib/type.js";
import {SourceCodeLink} from "./gh-utils.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", null, Object.values(T.MBTI).filter((x) => typeof x !== "string").map((x) => /* @__PURE__ */ React.createElement("li", null, T.MBTI[x]))), /* @__PURE__ */ React.createElement(SourceCodeLink, null));
};
