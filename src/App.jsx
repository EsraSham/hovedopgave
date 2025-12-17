import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Forside from "./views/Forside.jsx";
import Events from "./views/Events.jsx";
import Menu from "./views/Menu.jsx";
import Om from "./views/Om.jsx";
import Kontakt from "./views/Kontakt.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Forside />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "om",
        element: <Om />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
