import { createBrowserRouter, type RouteObject } from "react-router";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import { appRoutes, type AppRoute } from "./routes.config";

const flatten = (routes: AppRoute[]): AppRoute[] =>
  routes.flatMap((r) => [r, ...flatten(r.children ?? [])]);

const toRouteObject = (r: AppRoute): RouteObject => ({
  path: r.path,
  lazy: async () => ({ Component: (await r.loader()).default }),
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          ...flatten(appRoutes).map(toRouteObject),
          {
            path: "*",
            lazy: async () => ({
              Component: (await import("../pages/NotFound")).default,
            }),
          },
        ],
      },
    ],
  },
]);

export default router;
