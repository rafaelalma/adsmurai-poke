import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider } from "react-router-dom";

import routerInstance from "routerInstance";

describe("App", () => {
  it("renders", () => {
    render(<RouterProvider router={routerInstance} />);

    const homeTitle = screen.getByRole("heading", { name: "Home" });
    expect(homeTitle).toBeInTheDocument();
  });

  it("navigates from home page to pokedex page", async () => {
    render(<RouterProvider router={routerInstance} />);

    userEvent.click(screen.getByRole("link", { name: "Pokedex" }));

    const pokedexTitle = await screen.findByRole("heading", {
      name: "Pokedex",
    });
    expect(pokedexTitle).toBeInTheDocument();
  });
});
