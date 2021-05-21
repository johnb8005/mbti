import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import React from "../_snowpack/pkg/react.js";
import {Route, Switch} from "../_snowpack/pkg/react-router-dom.js";
import {BrowserRouter as Router} from "../_snowpack/pkg/react-router-dom.js";
import Home from "./home/index.js";
import Detail from "./detail/index.js";
import Layout from "./layout/index.js";
const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
export default () => {
  return /* @__PURE__ */ React.createElement(Router, {
    basename
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/:mbti/detail",
    component: Detail
  }), /* @__PURE__ */ React.createElement(Route, {
    component: NotFound
  }))));
};
