import { DecoratorFn } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const reactRouterDecorator: DecoratorFn = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const storybookHelpers = {
  reactRouterDecorator,
};

export default storybookHelpers;
