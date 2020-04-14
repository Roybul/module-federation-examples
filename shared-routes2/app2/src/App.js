import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import localRoutes from "./routes";

const App = () => (
  <HashRouter>
    <div>
      <h1>App 2</h1>
      <Switch>
        {localRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </div>
  </HashRouter>
);

export default App;
