import { ReactElement } from "react";

import "./CardList.scss";
import { PokemonListElement } from "types/pokemonType";
import Card from "components/molecules/Card";
import appConstants from "appConstants";

type CardListProps = {
  pokemons: PokemonListElement[];
};

export default function CardList({ pokemons }: CardListProps): ReactElement {
  return (
    <>
      {pokemons.length !== 0 ? (
        <ul data-cy="pokemon-list" className="pokemon-list">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} />
          ))}
        </ul>
      ) : (
        <ul className="pokemon-list">
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
