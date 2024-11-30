import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./reset.css";
import "./index.css";

import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "project",
    element: <Project />,
  },
  { path: "contact", element: <Contact /> },
  { path: "blog", element: <Blog /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
