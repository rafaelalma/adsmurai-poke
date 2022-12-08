import { ReactElement } from "react";
import { Link, useLoaderData } from "react-router-dom";

import pokemonService from "services/pokemonService";
import { PokemonListResponse } from "types/pokemonType";
import stringUtils from "utils/stringUtils";

export async function loader() {
  const pokemons = await pokemonService.getAll();
  return pokemons;
}

export default function PokedexPage(): ReactElement {
  const pokemonListResponse = useLoaderData() as PokemonListResponse;
  const pokemons = pokemonListResponse.results;

  return (
    <div>
      <h1>Pokedex</h1>
      {pokemons.length ? (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <Link to={pokemon.name}>
                {stringUtils.capitalize(pokemon.name)}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No pokemons</i>
        </p>
      )}
    </div>
  );
}
