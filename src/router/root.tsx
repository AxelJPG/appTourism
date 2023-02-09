import PageHome from "../pages/PageHome";
import ErrorPage from "../pages/ErrorPage";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import PageContactId from "../pages/PageContactId";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contact",
    element: <PageContact />,
    children: [
      {
        path: "/Contact/:IdContact",
        element: <PageContactId />,
      },
    ],
  },
  {
    path: "/About",
    element: <PageAbout />,
  },
]);
