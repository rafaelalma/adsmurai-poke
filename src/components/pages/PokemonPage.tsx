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
import Button from "components/atoms/Button";
import TypeChip from "components/atoms/TypeChip";
import TopBottomTemplate from "components/templates/TopBottomTemplate";
import SpriteWithUseImageLoaded from "helpers/SpriteWithUseImageLoaded";

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

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <TopBottomTemplate
      topWrapperClassName="pokemon-detail"
      title={`#${pokemon.id} ${stringUtils.capitalize(pokemon.name)}`}
      topComponent={
        <>
          <p className="pokemon-detail__title">Sprites</p>
          <div className="pokemon-detail__sprite-wrapper">
            {pokemon.sprites.front_default ? (
              <SpriteWithUseImageLoaded
                spriteSrc={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            ) : null}
            {pokemon.sprites.back_default ? (
              <SpriteWithUseImageLoaded
                spriteSrc={pokemon.sprites.back_default}
                alt={pokemon.name}
              />
            ) : null}
          </div>
          <div className="pokemon-detail__row-wrapper">
            <div>
              <p className="pokemon-detail__title">Types</p>
              <ul data-cy="type-list" className="pokemon-detail__list">
                {pokemon.types.map((type) => (
                  <TypeChip key={type.slot} type={type.type.name} />
                ))}
              </ul>
            </div>
            <div>
              <p className="pokemon-detail__title">Height</p>
              <p className="pokemon-detail__value">{`${pokemon.height} dm`}</p>
            </div>
            <div>
              <p className="pokemon-detail__title">Weight</p>
              <p className="pokemon-detail__value">{`${pokemon.weight} hg`}</p>
            </div>
          </div>
          <div className="pokemon-detail__row-wrapper">
            <div>
              <p className="pokemon-detail__title">Abilities</p>
              <ul className="pokemon-detail__list">
                {pokemon.abilities.map((ability) => (
                  <li className="pokemon-detail__list-item" key={ability.slot}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pokemon-detail__row-wrapper">
            <div>
              <p className="pokemon-detail__title">Stats</p>
              {pokemon.stats.map((stat) => {
                return (
                  <p className="pokemon-detail__stat">
                    <strong>{stat.stat.name.toUpperCase()}</strong>:{" "}
                    {stat.base_stat}
                  </p>
                );
              })}
            </div>
          </div>
        </>
      }
      bottomComponent={
        <Button classN="back-button" label="Back" onClick={handleBackClick} />
      }
    />
  );
}
