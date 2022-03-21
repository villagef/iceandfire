import { ROUTE_PATHS } from "./consts";
import { IRouteConfig } from "./types";
import HomePage from "../pages/Home";
import HousePage from "../pages/House";

export const ROUTES_CONFIG = (): IRouteConfig[] => [
  {
    path: ROUTE_PATHS.home,
    component: <HomePage />,
    name: "Home Page",
  },
  {
    path: ROUTE_PATHS.house,
    component: <HousePage />,
    name: "House Page",
  },
];
