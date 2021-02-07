import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "pages/Home/Home.react";
import Thanks from "pages/Thanks/Thanks.react";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/thanks">
          <Thanks />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
