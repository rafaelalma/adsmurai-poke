import { ReactElement } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import "./PokemonPage.scss";
import pokemonService from "services/pokemonService";
import { PokemonResponse } from "types/pokemonType";
import stringUtils from "utils/stringUtils";

export async function loader({ params }: LoaderFunctionArgs) {
  const pokemonId = params.pokemonId;

  if (!pokemonId) {
    throw new Error("No pokemon id");
  }

  const pokemon = await pokemonService.getById(pokemonId);
  return pokemon;
}

export default function PokemonPage(): ReactElement {
  const pokemon = useLoaderData() as PokemonResponse;

  return (
    <div className="pokemon-detail">
      <h1 className="title">{stringUtils.capitalize(pokemon.name)}</h1>
      {pokemon.sprites.front_default ? (
        <img
          className="pokemon-detail__sprite"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      ) : (
        <div className="pokemon-detail__sprite--pending" />
      )}
      <ul className="pokemon-detail__type-list">
        {pokemon.types.map((type) => (
          <li className="pokemon-detail__type-list-item" key={type.slot}>
            {type.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
