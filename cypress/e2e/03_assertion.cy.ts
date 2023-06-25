describe("Assertion example", () => {
  it("Implecit assertion", () => {
    cy.visit("https://www.reliancedigital.in");

    // using assertion to verify the URL
    cy.url().should("include", "reliancedigital.in");

    // to check the quality of the URL
    cy.url().should("eq", "https://www.reliancedigital.in/");
    cy.url().should("contain", "reliancedigital");

    // another way of writing the assertion
    cy.url()
      .should("include", "reliancedigital.in")
      .should("eq", "https://www.reliancedigital.in/")
      .should("contain", "reliancedigital");

    // use of and assertion
    cy.url()
      .should("include", "reliancedigital.in")
      .and("eq", "https://www.reliancedigital.in/")
      .and("contain", "reliancedigital")
      .and("not.contain", "dhiman");

    // verifying the title of the application
    cy.title()
      .should("include", "Online Electronic Shopping ")
      .and("eq", "Online Electronic Shopping Store in India - Reliance Digital")
      .and("contain", "India");
    // To check the visibility if the element
    cy.get("#RIL_MainHeaderLogo > div > img").should("be.visible").and("exist");

    // Check total number of links available on the website
    cy.get("a").then((links) => {
      const totalLinks = links.length;
      cy.log(`Total number of links: ${totalLinks}`);
    });
  });

  it.only("Explicit assertion", () => {
    cy.visit("https://www.reliancedigital.in");
    cy.wait(3000);
    // clicking on the notification popup -> No Thanks
    cy.get("#wzrk-cancel").click();
    cy.wait(3000);

    // login to the reliance digital application
    cy.get("#RIL_HeaderLoginAndMyAccount").click();
    cy.wait(3000);

    // verify the login/registration page
    cy.get(".Panel__PanelTitle-sc-gt84es-1.efOBOC").should(
      "have.text",
      "Login / Register"
    );

    // Enter the mobile number
    cy.get("#lMobileNumber").click().type("8148467626");

    // click on the proceed button
    cy.get("button[type='button'] span").click();

    // verify the registration page
    cy.get(".Panel__PanelTitle-sc-gt84es-1.efOBOC").should(
      "have.text",
      "Register New Account"
    );
  });
});
