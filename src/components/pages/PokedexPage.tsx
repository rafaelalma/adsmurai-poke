import { ReactElement } from "react";
import {
  Form,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";

import pokemonService from "services/pokemonService";
import { PokemonListResponse } from "types/pokemonType";
import stringUtils from "utils/stringUtils";

const LIMIT = "20";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const offset = url.searchParams.get("offset") ?? undefined;

  const pokemons = await pokemonService.getAll(LIMIT, offset);
  return pokemons;
}

export default function PokedexPage(): ReactElement {
  const pokemonListResponse = useLoaderData() as PokemonListResponse;
  const pokemons = pokemonListResponse.results;

  const nextUrl = pokemonListResponse.next
    ? new URL(pokemonListResponse.next)
    : null;
  const nextOffset = nextUrl ? nextUrl.searchParams.get("offset") : null;

  const previousUrl = pokemonListResponse.previous
    ? new URL(pokemonListResponse.previous)
    : null;
  const previousOffset = previousUrl
    ? previousUrl.searchParams.get("offset")
    : null;

  return (
    <div className="page-wrapper">
      <h1 className="title">Pokedex</h1>
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
      <Form>
        {previousOffset ? (
          <button name="offset" value={previousOffset}>
            Previous
          </button>
        ) : null}
        {nextOffset ? (
          <button name="offset" value={nextOffset}>
            Next
          </button>
        ) : null}
      </Form>
    </div>
  );
}
