import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import React from "../_snowpack/pkg/react.js";
const ghUrl = "https://github.com/johnb8005/mbti";
const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
const ghUrlSha = `${ghUrl}/commit/${sha}`;
export const SourceCodeLink = () => {
  return /* @__PURE__ */ React.createElement("a", {
    href: ghUrl
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-link"
  }), " Source Code");
};
export const Sha = () => /* @__PURE__ */ React.createElement("a", {
  href: ghUrlSha
}, sha);
