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
import appConstants from "appConstants";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const offsetString = url.searchParams.get("offset");
  const offset = offsetString ? Number.parseInt(offsetString, 10) : undefined;

  const pokemons = await pokemonService.getAll(appConstants.LIMIT, offset);
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

  const totalPages = Math.round(pokemonListResponse.count / appConstants.LIMIT);

  const page = nextOffset
    ? Math.round(Number.parseInt(nextOffset) / appConstants.LIMIT)
    : totalPages;

  return (
    <div className="pokedex-page-wrapper">
      <div>
        <h1 className="title">Pokedex</h1>
        {pokemons.length ? (
          <ul data-cy="pokemon-list" className="pokemon-list">
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
      </div>
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
          <button
            className="pagination__button pagination__button--disabled"
            disabled
          >
            Previous
          </button>
        )}
        <p
          data-cy="pagination-pages-text"
          className="pagination__pages-text"
        >{`Page ${page} of ${totalPages}`}</p>
        {nextOffset ? (
          <button
            className="pagination__button"
            name="offset"
            value={nextOffset}
          >
            Next
          </button>
        ) : (
          <button
            className="pagination__button pagination__button--disabled"
            disabled
          >
            Next
          </button>
        )}
      </Form>
    </div>
  );
}
