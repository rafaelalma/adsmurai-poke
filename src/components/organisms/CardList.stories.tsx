import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardList from "./CardList";
import { PokemonListElement } from "types/pokemonType";
import storybookHelpers from "helpers/storybookHelpers";

const pokemons: PokemonListElement[] = [
  { name: "bulbasaur", url: "1" },
  { name: "ivysaur", url: "2" },
  { name: "VENUSAUR", url: "3" },
  { name: "Charmander", url: "4" },
  { name: "charmeleon", url: "5" },
  { name: "charizard", url: "6" },
  { name: "squirtle", url: "7" },
  { name: "wartortle", url: "8" },
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
