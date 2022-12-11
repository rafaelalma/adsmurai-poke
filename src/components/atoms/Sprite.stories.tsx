import { ComponentStory, ComponentMeta } from "@storybook/react";

import Sprite from "./Sprite";

export default {
  title: "Sprite",
  component: Sprite,
} as ComponentMeta<typeof Sprite>;

const Template: ComponentStory<typeof Sprite> = (args) => <Sprite {...args} />;

export const Default = Template.bind({});
Default.args = {
  spriteSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  alt: "bulbasaur",
  imgRef: null,
  loaded: true,
  onLoad: () => {},
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loaded: false,
};
