import React from "react";
import { Redirect } from "react-router-dom";
import { generateRoutesFromConfigs } from "./RouteUtils";
import { pagesConfigs } from "./main/pages/pagesConfigs";

const routeConfigs = [...pagesConfigs];
const routes = [
  ...generateRoutesFromConfigs(routeConfigs),
  //   {
  //     path: "/",
  //     exact: true,
  //     component: () => <Redirect to="/home" />
  //   },
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
];

export default routes;
