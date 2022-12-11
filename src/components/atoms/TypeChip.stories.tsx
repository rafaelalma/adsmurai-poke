import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypeChip from "./TypeChip";

export default {
  title: "TypeChip",
  component: TypeChip,
} as ComponentMeta<typeof TypeChip>;

const Template: ComponentStory<typeof TypeChip> = (args) => (
  <TypeChip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "grass",
};
