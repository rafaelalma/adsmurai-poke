import { ComponentStory, ComponentMeta } from "@storybook/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Card from "./Card";

const pokemon = {
  name: "Bulbasaur",
};

const mockRouterInstance = createBrowserRouter([
  {
    path: "*",
    element: <Card name={pokemon.name} />,
  },
]);

export default {
  title: "Card",
  component: Card,
  decorators: [
    () => (
      <div style={{ backgroundColor: "black", padding: "16px" }}>
        <RouterProvider router={mockRouterInstance} />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = pokemon;
