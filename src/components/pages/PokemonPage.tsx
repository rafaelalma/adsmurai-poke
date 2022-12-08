import { ReactElement } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

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
    <div>
      <h1>{stringUtils.capitalize(pokemon.name)}</h1>
      {pokemon.sprites.front_default ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : null}
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}
