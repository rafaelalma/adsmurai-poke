describe("Pokemon list", () => {
  it("Shows a list with Pokemon names", () => {
    // GIVEN
    // The user is in the home page
    cy.visit("http://localhost:3000");
    // WHEN
    // The user clicks in the Pokedex link
    cy.contains("Pokedex").click();
    // THEN
    // The app navigates to the Pokemon list page and shows a list with Pokemon names
    cy.get("h1").should("contain", "Pokemon's List");
  });
});
