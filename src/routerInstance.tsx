import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "components/pages/ErrorPage";
import HomePage from "components/pages/HomePage";
import PokedexPage, {
  loader as pokedexLoader,
} from "components/pages/PokedexPage";

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
    ],
  },
]);

export default routerInstance;
