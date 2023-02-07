import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import ErrorPage from "./pages/ErrorPage";
import PageContact from "./pages/PageContact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Contact/:IdContact",
        element: <PageContact />,
      },
    ],
  },
  {
    path: "/About",
    element: <PageAbout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
