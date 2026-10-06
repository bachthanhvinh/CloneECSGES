import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import router from "./routes";
import { createRoot } from "react-dom/client";
import "./styles/golobals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
