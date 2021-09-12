import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import Detail from "./detail/index";
import Layout from "./layout";

import { links } from "./link";

import Zodiac from "./zodiac";

import Income from "./income";
import Iq from "./iq";

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
          <Route exact path={links.mbti.link} component={Home} />
          <Route path={"/:mbti/detail"} component={Detail} />
          <Route path={"/income"} component={Income} />
          <Route path={"/iq"} component={Iq} />
          <Route path={links.zodiac.link} component={Zodiac} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
