describe("Date-picker scenario", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });
  it("Date picker demo", () => {
    cy.get("#datePickerMonthYearInput").click();
    cy.get(".react-datepicker__month-select").select("0");
    cy.get(".react-datepicker__year-select").select("1920");
    cy.findByText("12").click();
    // Asserting after choosing the date
    cy.get("#datePickerMonthYearInput").should("have.value", "01/12/1920");
  });
});
