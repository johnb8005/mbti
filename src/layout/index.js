import React from "../../_snowpack/pkg/react.js";
import Footer from "./footer.js";
import Header from "./header.js";
const Layout = ({children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-column min-vh-100"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex-fill"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children, " ")), /* @__PURE__ */ React.createElement(Footer, null));
};
export default Layout;
