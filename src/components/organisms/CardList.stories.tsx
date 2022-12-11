import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardList from "./CardList";
import { PokemonListElement } from "types/pokemonType";
import storybookHelpers from "helpers/storybookHelpers";

const pokemons: PokemonListElement[] = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  { name: "VENUSAUR", url: "https://pokeapi.co/api/v2/pokemon/3/" },
  { name: "Charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
  { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
  { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
  { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
  { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
];

export default {
  title: "CardList",
  component: CardList,
  decorators: [storybookHelpers.reactRouterDecorator],
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Default = Template.bind({});
Default.args = { pokemons };

export const Loading = Template.bind({});
Loading.args = { pokemons: [] };
