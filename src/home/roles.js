import React from "../../_snowpack/pkg/react.js";
import * as T from "../lib/type.js";
import * as U from "../lib/utils.js";
import * as UiUtils from "../ui-utils.js";
import {listPersonalities, listRoles} from "../utils.js";
const Group = ({role}) => /* @__PURE__ */ React.createElement("div", {
  className: "col-md-3"
}, /* @__PURE__ */ React.createElement("h3", null, T.Role[role]), /* @__PURE__ */ React.createElement("ul", {
  className: "list-group"
}, listPersonalities.filter((x) => role === U.getRole(U.toComponent(x))).map((x) => /* @__PURE__ */ React.createElement(UiUtils.PersonalitySmallRow, {
  key: x,
  mbti: x
}))));
const Roles = () => /* @__PURE__ */ React.createElement("div", {
  className: "row"
}, listRoles.map((role) => /* @__PURE__ */ React.createElement(Group, {
  role,
  key: role
})));
export default Roles;
