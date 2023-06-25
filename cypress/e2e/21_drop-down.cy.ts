describe("Dropdown_handle", () => {
  it("static dropdown", () => {
    // visiting the website
    cy.visit("https://codenboxautomationlab.com/practice/");

    // hiding the social media ads
    cy.get("div[title='Hide']").click().should("not.be.visible");

    // selecting an option from the dropdow
    cy.get("#dropdown-class-example")
      .select("Appium")
      .should("have.value", "option2");
  });

  it("dynamic dropdown", () => {
    // visiting the website
    cy.visit("https://codenboxautomationlab.com/practice/");

    // hiding the social media ads
    cy.get("div[title='Hide']").click().should("not.be.visible");

    cy.xpath("//input[@id='autocomplete']").click().type("India");
    /* 
       cy.xpath("//select[@name='country_id']")
         .click()
         .type("India")
         .trigger("keypress", { keyCode: 13 }); */
    // parent-child chaining to select one option form the drop-down
    cy.get("#ui-id-1").find(".ui-menu-item").eq(1).contains("India").click();
  });
});
