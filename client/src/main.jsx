import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import CharacterHero from "./pages/CharacterHero";
import CharacterVilain from "./pages/CharacterVilain";
import CharacterHeroDetails from "./pages/CharacterHeroDetails";
import AddHero from "./pages/AddHero";
import EditHero from "./pages/EditHero";

import { getBands, getHeros, heroLoaderDetails } from "./services/request";
import heroActions from "./services/heroActions";

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
        path: "/hero/add",
        element: <AddHero />,
        action: heroActions,
        loader: getBands,
      },
      {
        path: "/hero/edit/:id",
        element: <EditHero />,
        action: heroActions,
        loader: getBands,
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
