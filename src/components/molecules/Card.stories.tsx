import { ComponentStory, ComponentMeta } from "@storybook/react";

import storybookHelpers from "helpers/storybookHelpers";

import Card from "./Card";

const pokemon = {
  name: "Bulbasaur",
};

export default {
  title: "Card",
  component: Card,
  decorators: [storybookHelpers.reactRouterDecorator],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = pokemon;
