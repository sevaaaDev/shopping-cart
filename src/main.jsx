import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

// TODO: Cart LOGO
// TODO: style nav bar
// TODO: Fix search bar
// TODO: Api
// TODO: Shop Page
// TODO: Home Page

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
