import { useState, useEffect, memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES_CONFIG } from "./routes";
import { IRouteConfig } from "./types";

function RoutesArray() {
  const [allRoutes, setAllRoutes] = useState<any>();

  useEffect(() => {
    setAllRoutes(createAllRoutes(ROUTES_CONFIG()));
  }, []);

  const generateRouteContent = (routeConfig: IRouteConfig) => {
    return (
      <Route
        key={routeConfig.path}
        path={routeConfig.path}
        element={routeConfig.component}
      />
    );
  };

  const createAllRoutes = (routesConfig: IRouteConfig[]) => {
    return routesConfig.map((route: IRouteConfig) =>
      generateRouteContent(route)
    );
  };

  return <Routes>{allRoutes}</Routes>;
}

export default memo(RoutesArray);
