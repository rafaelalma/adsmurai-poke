import { render, screen } from "@testing-library/react";
import TypeChip from "./TypeChip";

describe("TypeChip", () => {
  it("renders type as a list item", () => {
    render(<TypeChip type="grass" />);

    const typeChip = screen.getByRole("listitem", { name: "" });
    expect(typeChip).toBeInTheDocument();

    const typeChipText = screen.getByText("grass");
    expect(typeChipText).toBeInTheDocument();
  });
});
