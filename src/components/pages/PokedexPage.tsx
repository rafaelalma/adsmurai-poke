import { ReactElement } from "react";
import {
  Form,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";

import "./PokedexPage.scss";
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
    <div>
      <h1 className="title">Pokedex</h1>
      {pokemons.length ? (
        <ul className="pokemon-list">
          {pokemons.map((pokemon) => (
            <li className="pokemon-list__list-item" key={pokemon.name}>
              <Link className="pokemon-list__link" to={pokemon.name}>
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
      <Form className="pagination">
        {previousOffset ? (
          <button
            className="pagination__button"
            name="offset"
            value={previousOffset}
          >
            Previous
          </button>
        ) : (
          <button className="pagination__button pagination__button--disabled">
            Previous
          </button>
        )}
        {nextOffset ? (
          <button
            className="pagination__button"
            name="offset"
            value={nextOffset}
          >
            Next
          </button>
        ) : (
          <button className="pagination__button pagination__button--disabled">
            Next
          </button>
        )}
      </Form>
    </div>
  );
}
