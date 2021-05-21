import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Detail from "./detail/index";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route path={"/:mbti/detail"} component={Detail} />
      <Route component={NotFound} />
    </Switch>
  );
};
