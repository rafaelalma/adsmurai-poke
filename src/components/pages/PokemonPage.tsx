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
import TopBottomTemplate from "components/templates/TopBottomTemplate";
import Sprite from "components/atoms/Sprite";

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
    <TopBottomTemplate
      wrapperClassName="pokemon-page-wrapper"
      topWrapperClassName="pokemon-detail"
      title={stringUtils.capitalize(pokemon.name)}
      topComponent={
        <>
          {pokemon.sprites.front_default ? (
            <Sprite
              spriteSrc={pokemon.sprites.front_default}
              alt={pokemon.name}
              imgRef={imgRef}
              loaded={loaded}
              onLoad={onLoad}
            />
          ) : null}
          <ul data-cy="type-list" className="pokemon-detail__type-list">
            {pokemon.types.map((type) => (
              <TypeChip key={type.slot} type={type.type.name} />
            ))}
          </ul>
        </>
      }
      bottomComponent={
        <Button classN="back-button" label="Back" onClick={handleBackClick} />
      }
    />
  );
}
