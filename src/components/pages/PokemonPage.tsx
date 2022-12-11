import { ReactElement } from "react";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

import "./PokemonPage.scss";
import pokemonService from "services/pokemonService";
import { PokemonResponse } from "types/pokemonType";
import stringUtils from "utils/stringUtils";
import useImageLoaded from "hooks/useImageLoaded";
import Button from "components/atoms/Button";
import TypeChip from "components/atoms/TypeChip";

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

  const { imgRef, loaded, onLoad } = useImageLoaded();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="pokemon-page-wrapper">
      <div className="pokemon-detail">
        <h1 className="title">{stringUtils.capitalize(pokemon.name)}</h1>
        {pokemon.sprites.front_default ? (
          <img
            ref={imgRef}
            onLoad={onLoad}
            className="pokemon-detail__sprite"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            hidden={!loaded}
          />
        ) : null}
        {!loaded ? <div className="pokemon-detail__sprite--pending" /> : null}
        <ul data-cy="type-list" className="pokemon-detail__type-list">
          {pokemon.types.map((type) => (
            <TypeChip key={type.slot} type={type.type.name} />
          ))}
        </ul>
      </div>
      <Button classN="back-button" label="Back" onClick={handleBackClick} />
    </div>
  );
}
