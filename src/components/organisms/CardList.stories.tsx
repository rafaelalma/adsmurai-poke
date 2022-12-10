import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardList from "./CardList";
import { PokemonListElement } from "types/pokemonType";
import storybookHelpers from "helpers/storybookHelpers";

const pokemons: PokemonListElement[] = [
  { name: "bulbasaur" },
  { name: "ivysaur" },
  { name: "VENUSAUR" },
  { name: "Charmander" },
  { name: "charmeleon" },
  { name: "charizard" },
  { name: "squirtle" },
  { name: "wartortle" },
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
