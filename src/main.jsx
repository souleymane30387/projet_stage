import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inscription from './pages/inscription/Inscription_temp.jsx';
import Connexion from './pages/connexion/Connexion_temp.jsx';
import Accueil from "./pages/accueil/Accueil.jsx";
import Cv from "./pages/accueil/Cv_temp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inscription />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/accueil",
    element: <Accueil />,
  },
  {
    path: "/cv",
    element: <Cv />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
