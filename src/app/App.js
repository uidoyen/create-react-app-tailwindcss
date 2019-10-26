import React from "react";
import { Router } from "react-router-dom";

import history from "./history";
import AppContext from "./AppContext";
import Provider from "react-redux/es/components/Provider";
import store from "./store";
import routes from "app/routesConfig";
import Layout from "app/Layout/index";

const App = () => {
  return (
    <AppContext.Provider
      value={{
        routes
      }}
    >
      <Provider store={store}>
        <Router history={history}>
          <Layout />
        </Router>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
