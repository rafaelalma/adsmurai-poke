import { render, screen } from "@testing-library/react";
import Sprite from "./Sprite";

describe("Sprite", () => {
  it("renders image when it has loaded", () => {
    render(
      <Sprite
        spriteSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="bulbasaur"
        imgRef={null}
        loaded={true}
        onLoad={() => {}}
      />
    );

    const sprite = screen.getByRole("img", { name: "bulbasaur" });
    expect(sprite).toBeInTheDocument();

    expect(sprite).toHaveClass("sprite");
    expect(sprite.getAttribute("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    );
  });

  it("renders placeholder until image has loaded", () => {
    render(
      <Sprite
        spriteSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="bulbasaur"
        imgRef={null}
        loaded={false}
        onLoad={() => {}}
      />
    );

    const sprite = screen.getByRole("img", { name: "", hidden: true });
    expect(sprite).toBeInTheDocument();
    expect(sprite.getAttribute("alt")).toBe("bulbasaur");
    expect(sprite).toHaveAttribute("hidden");

    const placeholder = screen.getByTestId("placeholder");
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveClass("sprite sprite--pending");
  });
});
