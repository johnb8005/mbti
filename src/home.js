import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import * as T from "./lib/type.js";
import * as U from "./lib/utils.js";
import {SourceCodeLink} from "./gh-utils.js";
const listPersonalities = Object.values(T.MBTI).filter((x) => typeof x !== "string").map((x) => x);
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", null, listPersonalities.map((x) => {
    const m = x;
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
      to: `/${x}/detail`
    }, T.MBTI[m]), " - ", T.Personality[m], " ", "- Role: ", T.Role[U.getRole(U.toComponent(x))]);
  })), /* @__PURE__ */ React.createElement("h3", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://www.16personalities.com`
  }, "16Personalities.com")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://personalityjunkie.com`
  }, "The Personality Junkie")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://www.teamtechnology.co.uk/tt/t-articl/mb-simpl.htm`
  }, "teamtechnology"))), /* @__PURE__ */ React.createElement(SourceCodeLink, null));
};
