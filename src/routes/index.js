import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Bio, Contact } from "../pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
