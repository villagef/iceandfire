import { ReactNode } from "react";

export interface IRouteConfig {
  path: string;
  component: ReactNode;
  name: string;
}