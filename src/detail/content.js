import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import * as T from "../lib/type.js";
import * as U from "../lib/utils.js";
const Content = ({mbtiId}) => {
  const cps = U.toComponent(mbtiId);
  const role = U.getRole(cps);
  const sPersonality = T.MBTI[mbtiId];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, sPersonality, " ", T.Personality[mbtiId], " - Role ", T.Role[role]), /* @__PURE__ */ React.createElement("h3", null, "Dominant "), /* @__PURE__ */ React.createElement("p", null, T.CognitiveFunction[U.toDominant(cps)]), /* @__PURE__ */ React.createElement("h3", null, "Romantic Partners"), /* @__PURE__ */ React.createElement("ul", null, U.findRomanticPartners(cps).map((x) => /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: `/${U.fromComponent(x)}/detail`
  }, T.MBTI[U.fromComponent(x)])))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://www.16personalities.com/${sPersonality.toLowerCase()}-personality`
  }, "16Personalities.com")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://personalityjunkie.com/the-${sPersonality.toLowerCase()}/`
  }, "The Personality Junkie"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Back")));
};
export default Content;
