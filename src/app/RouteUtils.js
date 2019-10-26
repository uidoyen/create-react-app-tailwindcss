export const setRoutes = config => {
  let routes = [...config.routes];

  if (config.settings || config.auth) {
    routes = routes.map(route => {
      let auth = config.auth ? [...config.auth] : [];
      auth = route.auth ? [...auth, ...route.auth] : auth;
      return {
        ...route,
        settings: { ...config.settings, ...route.settings },
        auth
      };
    });
  }
  return [...routes];
};
export const generateRoutesFromConfigs = configs => {
  console.log(configs);
  let allRoutes = [];
  configs.forEach(config => {
    allRoutes = [...allRoutes, ...setRoutes(config)];
  });
  return allRoutes;
};
