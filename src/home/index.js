import React from "../../_snowpack/pkg/react.js";
import Roles from "./roles.js";
import CognitiveFunctions from "./cognitive-functions.js";
import Tabs from "../components/tabs.js";
const Nav = Tabs([{name: "by Role"}, {name: "by Cognitive Function"}]);
export default () => {
  const [option, setOption] = React.useState(0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, {
    option,
    onClick: setOption
  }), /* @__PURE__ */ React.createElement("br", null), option === 0 && /* @__PURE__ */ React.createElement(Roles, null), option === 1 && /* @__PURE__ */ React.createElement(CognitiveFunctions, null));
};
