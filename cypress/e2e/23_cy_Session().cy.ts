describe("Menu scenario", () => {
  beforeEach(() => {
    cy.session("mySession", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get("#userName").type("chris");
      cy.get("#password").type("Session123#");
      cy.get("#login").click();
    });
  });
  it("Checking whether the session is saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Checking whether the session is saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
});
