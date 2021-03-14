import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Bio } from "../pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bio" component={Bio} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
