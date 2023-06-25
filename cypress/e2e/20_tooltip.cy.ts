describe("Tool-tip scenario", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
  });
  it("validating tooltip", () => {
    cy.get("#toolTipButton").realHover();
    cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
  });

  it("A tag tooltip", () => {
    cy.contains("a", "Contrary").realHover();
  });
});
