describe("handling iFrame", () => {
  it("Approach_1", () => {
    // visiting the website
    cy.visit("https://codenboxautomationlab.com/practice/");

    // find the iframe
    const iFrame = cy
      .get("#courses-iframe")
      // we have only 1 document under this frame that why we are writing '0'
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iFrame
      .find("div[id='search-2'] input[placeholder='Search...']")
      .type("Software testing");
    iFrame
      .get("div[id='search-2'] button[role='button']")
      .click();
  });

  it("Approach_2(Using custom command)", () => {
    // visiting the website
    cy.visit("https://codenboxautomationlab.com/practice/");

    // Typing the text on the search box

    cy.getIframe("#courses-iframe")
      .find("div[id='search-2'] input[placeholder='Search...']")
      .type("Software testing");

    // clicking on the search button
    cy.getIframe("#courses-iframe")
      .get("div[id='search-2'] button[role='button']")
      .click();
  });

  it("Approach_3- (using cypress iframe plugin)", () => {
    cy.visit("https://codenboxautomationlab.com/practice/");

    // getting the iFrame
    cy.frameLoaded("#courses-iframe");

    // Typing on the search box
    cy.get("div[id='search-2'] input[placeholder='Search...']").type(
      "Software testing"
    );

    // click on the search button
    cy.get(
      "div[id='search-2'] button[role='button']"
    ).click();
  });

  it.only('Typing inside an iFrame also selecting all the text and deleting it',()=> {
        cy.visit(`${Cypress.env("theInternet")}/iframe`);
        cy.get("#mce_0_ifr").then((iframe)=> {
            const body = iframe.contents().find("body");
            cy.wrap(body).find('p').type('{selectALL}{del} My name is chris');
        })
})
});
