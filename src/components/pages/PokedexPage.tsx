import { ReactElement } from "react";
import { Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import "./PokedexPage.scss";
import pokemonService from "services/pokemonService";
import { PokemonListResponse } from "types/pokemonType";
import appConstants from "appConstants";
import Button from "components/atoms/Button";
import CardList from "components/organisms/CardList";
import TopBottomTemplate from "components/templates/TopBottomTemplate";

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
    <TopBottomTemplate
      title="Pokedex"
      topComponent={<CardList pokemons={pokemons} />}
      bottomComponent={
        <Form className="pagination">
          {previousOffset ? (
            <Button label="Previous" name="offset" value={previousOffset} />
          ) : (
            <Button label="Previous" disabled />
          )}
          <p
            data-cy="pagination-pages-text"
            className="pagination__pages-text"
          >{`${page} - ${totalPages}`}</p>
          {nextOffset ? (
            <Button label="Next" name="offset" value={nextOffset} />
          ) : (
            <Button label="Next" disabled />
          )}
        </Form>
      }
    />
  );
}
