import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "pages/Home/Home.react";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
