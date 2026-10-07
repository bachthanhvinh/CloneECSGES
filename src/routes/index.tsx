import { createBrowserRouter, type RouteObject } from "react-router";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import { appRoutes, type AppRoute } from "./routes.config";

const mapToRouteObject = (route: AppRoute): RouteObject => {
  const routeObject: RouteObject = {
    path: route.path,
    lazy: async () => {
      const module = await route.loader();
      return { Component: module.default };
    },
  };

  if (route.children && route.children.length > 0) {
    routeObject.children = route.children.map(mapToRouteObject);
  }

  return routeObject;
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          ...appRoutes.map(mapToRouteObject),

          {
            path: "*",
            lazy: async () => {
              const module = await import("../pages/NotFound");
              return { Component: module.default };
            },
          },
        ],
      },
    ],
  },
]);

export default router;
