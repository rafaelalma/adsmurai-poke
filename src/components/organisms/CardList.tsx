import { ReactElement } from "react";

import "./CardList.scss";
import { PokemonListElement } from "types/pokemonType";
import Card from "components/molecules/Card";
import appConstants from "appConstants";
import stringUtils from "utils/stringUtils";

type CardListProps = {
  pokemons: PokemonListElement[];
};

export default function CardList({ pokemons }: CardListProps): ReactElement {
  return (
    <>
      {pokemons.length !== 0 ? (
        <ul data-cy="pokemon-list" className="card-list">
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              id={stringUtils.extractPokemonUrlId(pokemon.url)}
            />
          ))}
        </ul>
      ) : (
        <ul className="card-list">
          {Array.from(Array(appConstants.LIMIT).keys()).map((elem, index) => (
            <li key={index} className="card">
              <p className="card__link">...</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
