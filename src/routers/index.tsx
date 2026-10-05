import MainLayout from "../component/layout/MainLayout";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
        ],
      },
    ],
  },
]);

export default router;
