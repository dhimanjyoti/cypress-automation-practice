describe("handle tables", () => {
  beforeEach("navigating to the site", () => {
    // visiting the website
    cy.visit("https://cosmocode.io/");

    // mouseover on the more option
    cy.xpath("(//ul[@id='mega-menu-primary'])[2]").invoke("show");
    cy.get(
      "div[class='inside-navigation'] li[id='mega-menu-item-5322'] a[class='mega-menu-link']"
    ).click({ force: true });
  });

  it.skip("Check number of Rows and Colouns", () => {
    // find the number of rows
    cy.get("table[id='countries'] > tbody >tr").should("have.length", "197");

    // find the number of columns
    cy.get("table[id='countries'] > tbody >tr >td >h3").should(
      "have.length",
      "5"
    );
  });
  it.skip("Check cell data in specific row and Column", () => {
    // checking the value of a row
    cy.get(
      "table[id='countries'] > tbody >tr:nth-child(5)>td:nth-child(3)"
    ).contains("Andorra la Vella");
  });

  it.skip("Read all the rows and columns data in the first page", () => {
    cy.get("table[id='countries'] > tbody >tr").each(($row) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($col) => {
          cy.log($col.text());
        });
      });
    });
  });
});
describe.only("handling Dynamic table", () => {
  it("Dynamic table", () => {
    cy.visit("http://uitestingplayground.com/dynamictable");
    cy.get('div[role="row"]')
      .contains("Chrome")
      .parent()
      .contains("%")
      .then((cell) => {
        cy.get(".bg-warning").should("contain", `Chrome CPU: ${cell.text()}`);
      });
  });
});
