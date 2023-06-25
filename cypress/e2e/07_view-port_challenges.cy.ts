describe("View port", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site/`);
  });
  it("changing the viewport", () => {
    cy.viewport("iphone-6+");
    cy.get("#mobile_menu_toggler").should("be.visible");
  });
  it("specific viewport", () => {
    cy.viewport(600, 400);
    cy.get("#mobile_menu_toggler").should("be.visible");
  });
});
