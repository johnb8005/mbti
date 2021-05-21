import React from "../_snowpack/pkg/react.js";
import * as T from "./lib/type.js";
export default () => {
  return /* @__PURE__ */ React.createElement("ul", null, Object.values(T.MBTI).filter((x) => typeof x !== "string").map((x) => /* @__PURE__ */ React.createElement("li", null, T.MBTI[x])));
};
