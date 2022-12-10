import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders", () => {
    render(<Button label="Button" />);

    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("has name and value props", () => {
    render(<Button label="Button" name="button-name" value="button-value" />);

    const button = screen.getByRole("button", { name: "Button" });

    expect(button).toHaveAttribute("name");
    expect(button.getAttribute("name")).toBe("button-name");

    expect(button).toHaveAttribute("value");
    expect(button.getAttribute("value")).toBe("button-value");
  });

  it("calls the onClick callback handler", () => {
    const onClick = jest.fn();

    render(<Button label="Button" onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Button" });

    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled", () => {
    render(<Button label="Button" disabled />);

    const button = screen.getByRole("button", { name: "Button" });

    expect(button).toHaveClass("button--disabled");
    expect(button).toHaveAttribute("disabled");
  });

  it("has additional classes", () => {
    render(<Button label="Button" classN="button--test button--big" />);

    const button = screen.getByRole("button", { name: "Button" });

    expect(button).toHaveClass("button");
    expect(button).toHaveClass("button--test");
    expect(button).toHaveClass("button--big");
  });
});
