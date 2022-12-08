import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "components/pages/ErrorPage";
import HomePage from "components/pages/HomePage";
import PokedexPage, {
  loader as pokedexLoader,
} from "components/pages/PokedexPage";
import PokemonPage, {
  loader as pokemonLoader,
} from "components/pages/PokemonPage";

const routerInstance = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/pokedex",
        element: <PokedexPage />,
        loader: pokedexLoader,
      },
      {
        path: "/pokedex/:pokemonId",
        element: <PokemonPage />,
        loader: pokemonLoader,
      },
    ],
  },
]);

export default routerInstance;
