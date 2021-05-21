import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import * as T from "./lib/type.js";
import {toImgPath} from "./utils.js";
export const PersonalitySmallRow = ({mbti}) => /* @__PURE__ */ React.createElement("li", {
  className: "list-group-item"
}, /* @__PURE__ */ React.createElement("img", {
  height: 50,
  src: toImgPath(mbti)
}), " ", /* @__PURE__ */ React.createElement(Link, {
  to: `/${mbti}/detail`
}, T.MBTI[mbti]), " ", /* @__PURE__ */ React.createElement("small", null, T.Personality[mbti]));
