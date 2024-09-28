import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import CharacterHero from "./pages/CharacterHero";
import CharacterVilain from "./pages/CharacterVilain";

import { getBands, getHeros, heroLoaderDetails } from "./services/request";
import CharacterHeroDetails from "./pages/CharacterHeroDetails";
import AddHero from "./pages/AddHero";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hero",
        element: <CharacterHero />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const band = url.searchParams.get("band");
          const result = {
            bands: await getBands(),
            heros: await getHeros(band),
          };
          return result;
        },
      },
      {
        path: "/hero/:id",
        element: <CharacterHeroDetails />,
        loader: heroLoaderDetails,
      },
      {
        path: "/hero",
        element: <AddHero />,
      },
      {
        path: "/vilain",
        element: <CharacterVilain />,
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
