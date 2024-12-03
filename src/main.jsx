import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./reset.css";
import "./index.css";

const About = lazy(() => import("./pages/about"));
const Project = lazy(() => import("./pages/project"));
const Contact = lazy(() => import("./pages/contact"));
const Blog = lazy(() => import("./pages/blog"));

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
    path: "/:code/:project",
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
