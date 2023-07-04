// beforeEach --> This will execute before each and every 'it' block.
// afterEach  --> This will execute after completion of each 'it' block.
// before --> Before starting all the 'it' blocks before hook will execute only once.
//after --> after completion of all the 'it' blocks after hook will execute only once.

describe("TestSuite", () => {
  before(() => {
    // vising the website
    cy.log("Lunching the app");
  });

  after(() => {
    cy.log("Visit the website");
  });

  beforeEach(() => {
    cy.log(" Login to the application");
  });

  afterEach(() => {
    cy.log("Logout from the application");
  });

  it("verify the website", () => {
    cy.log("Lunch WT web application");
  });

  it("Find a product", () => {
    cy.log("searching a product");
  });

  it("logging out", () => {
    cy.log("Loging out from the application");
  });
});

describe("Hooks example", () => {
  // beforeEach
  beforeEach("navigating to the site", () => {
    // visiting the website
    cy.visit("https://cosmocode.io/");

    // mouseover on the more option
    cy.xpath("(//ul[@id='mega-menu-primary'])[2]").invoke("show");
    cy.get(
      "div[class='inside-navigation'] li[id='mega-menu-item-5322'] a[class='mega-menu-link']"
    ).click({ force: true });
  });

  it("Check number of Rows and Colouns", () => {
    // find the number of rows
    cy.get("table[id='countries'] > tbody >tr").should("have.length", "197");

    // find the number of columns
    cy.get("table[id='countries'] > tbody >tr >td >h3").should(
      "have.length",
      "5"
    );
  });

  it("Check cell data in specific row and Column", () => {
    // checking the value of a row
    cy.get(
      "table[id='countries'] > tbody >tr:nth-child(5)>td:nth-child(3)"
    ).contains("Andorra la Vella");
  });
});
