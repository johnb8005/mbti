import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import Detail from "./detail/index";
import Layout from "./layout";

import Zodiac from "./zodiac";

const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Router basename={basename}>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/:mbti/detail"} component={Detail} />
          <Route path={"/zodiac"} component={Zodiac} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
