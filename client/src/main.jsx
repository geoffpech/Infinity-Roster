import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import AccountCreation from "./pages/AccountCreation";
import LoginUser from "./pages/LoginUser";
import CharacterHero from "./pages/CharacterHero";
import CharacterVilain from "./pages/CharacterVilain";
import FavoriteUser from "./pages/FavoriteUser";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/accountcreation",
        element: <AccountCreation />,
      },
      {
        path: "/login",
        element: <LoginUser />,
      },
      {
        path: "/hero",
        element: <CharacterHero />,
      },
      {
        path: "/vilain",
        element: <CharacterVilain />,
      },
      {
        path: "/favoris",
        element: <FavoriteUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
