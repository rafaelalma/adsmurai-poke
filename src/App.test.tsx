import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import routerInstance from "routerInstance";

test("Renders App", () => {
  render(<RouterProvider router={routerInstance} />);

  const homeTitle = screen.getByText("Home");
  expect(homeTitle).toBeInTheDocument();
});
