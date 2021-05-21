import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import * as T from "../lib/type.js";
import * as U from "../lib/utils.js";
import {toImgPath} from "../utils.js";
import * as UIUtils from "../ui-utils.js";
const Content = ({mbtiId}) => {
  const cps = U.toComponent(mbtiId);
  const role = U.getRole(cps);
  const sPersonality = T.MBTI[mbtiId];
  const imgPath = sPersonality.toLowerCase() + "-" + T.Personality[mbtiId].toLowerCase();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, sPersonality, " - ", T.Personality[mbtiId]), /* @__PURE__ */ React.createElement("p", {
    className: "float-right"
  }, /* @__PURE__ */ React.createElement("img", {
    height: 300,
    src: toImgPath(mbtiId)
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("small", null, "Image from 16Personalities.com")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Role ", T.Role[role]), /* @__PURE__ */ React.createElement("li", null, "Cognitive Function: ", T.CognitiveFunction[U.toDominant(cps)], ",", " ", /* @__PURE__ */ React.createElement("small", null, "see", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Jungian_cognitive_functions#Isabel_Myers"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link"
  }))))), /* @__PURE__ */ React.createElement("h5", null, "Romantic Partners"), /* @__PURE__ */ React.createElement("ul", null, U.findRomanticPartners(cps).map((x) => /* @__PURE__ */ React.createElement(UIUtils.PersonalitySmallRow, {
    mbti: U.fromComponent(x)
  }))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://www.16personalities.com/${sPersonality.toLowerCase()}-personality`
  }, "16Personalities.com")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: `https://personalityjunkie.com/the-${sPersonality.toLowerCase()}/`
  }, "The Personality Junkie"))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Back")));
};
export default Content;
