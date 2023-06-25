describe("Menu scenario", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/menu`);
  });
  it("Menu example", () => {
    cy.get("a").contains("Main Item 2").realHover();
    cy.contains("a", "SUB SUB LIST »").realHover();
  });
});
