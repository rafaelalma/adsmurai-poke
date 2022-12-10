import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import routerInstance from "routerInstance";

describe("App", () => {
  it("renders", () => {
    render(<RouterProvider router={routerInstance} />);

    const homeTitle = screen.getByRole("heading", { name: "Home" });
    expect(homeTitle).toBeInTheDocument();
  });
});
