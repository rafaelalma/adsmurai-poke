describe("Pokemon list page navigation", () => {
  it("There are next and previous buttons to allow navigation between pages in the Pokemon list", () => {
    // GIVEN
    // The user is in the Pokedex page
    cy.visit("/pokedex");
    // WHEN
    // The user clicks the Next button
    cy.contains("button", "Next").click();
    // THEN
    // The app navigates to the next page in the Pokemon list
    cy.url().should("include", "?offset=20");
    cy.get('[data-cy="pokemon-list"]').contains("Spearow");
    // AND
    // WHEN
    // The user clicks the Previous button
    cy.contains("button", "Previous").click();
    // THEN
    // The app navigates to the previous page in the Pokemon list
    cy.url().should("include", "?offset=0");
    cy.get('[data-cy="pokemon-list"]').contains("Raticate");
  });
});
