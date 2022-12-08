describe("Pokemon list", () => {
  it("Shows a list with Pokemon names", () => {
    // GIVEN
    // The user is in the home page
    cy.visit("/");
    // WHEN
    // The user clicks in the Pokedex link
    cy.contains("a", "Pokedex").click();
    // THEN
    // The app navigates to the Pokedex page
    cy.url().should("include", "/pokedex");
    cy.get("h1").should("contain", "Pokedex");
    // AND
    // Shows a list with Pokemon names
    cy.get("ul");
    cy.get("li").first().should("contain", "Bulbasaur");
  });
});
