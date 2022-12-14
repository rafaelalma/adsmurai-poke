import { render, screen } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PokemonListElement } from "types/pokemonType";
import CardList from "./CardList";
import appConstants from "appConstants";

const pokemons: PokemonListElement[] = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
];

const getMockRouterInstance = (pokemons: PokemonListElement[]) => {
  const mockRouterInstance = createBrowserRouter([
    {
      path: "*",
      element: <CardList pokemons={pokemons} />,
    },
  ]);

  return mockRouterInstance;
};

describe("CardList", () => {
  it("renders as a list", () => {
    render(<RouterProvider router={getMockRouterInstance(pokemons)} />);

    const cardList = screen.getByRole("list", { name: "" });
    expect(cardList).toBeInTheDocument();
  });

  it("renders pokemons as links", () => {
    render(<RouterProvider router={getMockRouterInstance(pokemons)} />);

    const pokemonLink = screen.getByRole("link", { name: "#1 Bulbasaur" });
    expect(pokemonLink).toBeInTheDocument();
  });

  it("renders placeholders", () => {
    render(<RouterProvider router={getMockRouterInstance([])} />);

    const pokemonLink = screen.queryByRole("link", { name: "#1 Bulbasaur" });
    expect(pokemonLink).not.toBeInTheDocument();

    const placeholderTexts = screen.getAllByText("...");
    expect(placeholderTexts[0]).toBeInTheDocument();
    expect(placeholderTexts).toHaveLength(appConstants.LIMIT);
  });
});
