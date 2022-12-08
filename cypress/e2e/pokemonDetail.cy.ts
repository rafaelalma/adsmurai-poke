describe("Pokemon detail", () => {
  it("Shows Pokemon details when a Pokemon in the Pokemon list is clicked", () => {
    // GIVEN
    // The user is in the Pokedex page
    cy.visit("/pokedex");
    // WHEN
    // The user clicks a Pokemon in the Pokemon list
    cy.contains("a", "Bulbasaur").click();
    // THEN
    // The app navigates to the Pokemon detail page
    cy.url().should("include", "/bulbasaur");
    cy.get("h1").should("contain", "Bulbasaur");
    // AND
    // Shows its characteristics
  });
});
