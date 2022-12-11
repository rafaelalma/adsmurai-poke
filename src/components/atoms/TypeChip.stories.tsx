import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypeChip from "./TypeChip";

export default {
  title: "TypeChip",
  component: TypeChip,
} as ComponentMeta<typeof TypeChip>;

const Template: ComponentStory<typeof TypeChip> = (args) => (
  <TypeChip {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  type: "normal",
};

export const Fire = Template.bind({});
Fire.args = {
  type: "fire",
};

export const Water = Template.bind({});
Water.args = {
  type: "water",
};

export const Grass = Template.bind({});
Grass.args = {
  type: "grass",
};
