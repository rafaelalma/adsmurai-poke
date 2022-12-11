import { render, screen } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./Card";

const mockRouterInstance = createBrowserRouter([
  {
    path: "*",
    element: <Card name="CARD-NAME" id="1" />,
  },
]);

describe("Card", () => {
  it("renders as a list item", () => {
    render(<RouterProvider router={mockRouterInstance} />);

    const card = screen.getByRole("listitem", { name: "" });
    expect(card).toBeInTheDocument();
  });

  it("renders capitalized name inside a react router link", () => {
    render(<RouterProvider router={mockRouterInstance} />);

    const cardLink = screen.getByRole("link", { name: "#1 Card-name" });
    expect(cardLink).toBeInTheDocument();
  });
});
