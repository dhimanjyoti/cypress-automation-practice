// require("@4tw/cypress-drag-drop");

describe("mouse operation", () => {
  it.skip("MouseHover", () => {
    cy.visit("https://www.reliancedigital.in");

    // mouse hover on the 'Mobile & Tablets option
    cy.get("li[id='RIL_MobilesTabletsNavigationNode'] div[class='nav__title']")
      .trigger("mouseover")
      .click();

    cy.wait(3000);

    // verify the menu after mouseover

    cy.xpath(
      "//a[@aria-label='/smartphones/c/S101711'][normalize-space()='Smartphones']"
    )
      .invoke("css", "overflow-x", "visible")
      .should("have.css", "overflow-x", "visible");
  });

  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // Approach_1
    /*.. cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    cy.get(".context-menu-icon-edit >span").should("be.visible"); */

    // Approach_2

    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-edit >span").should("be.visible");
  });

  it("Double click action", () => {
    cy.visit("https://demoqa.com/buttons");

    // Doubke clicking on the button using triggre

    // cy.get("#doubleClickBtn").trigger("dblclick");

    // verifying the DBclick

    // cy.get("#doubleClickMessage").should("be.visible");

    // Approach_2

    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should("be.visible");
  });

  it("Drag and Drop using plugin", () => {
    // visiting the website

    cy.visit("https://demoqa.com/droppable");

    cy.get("#draggable").should("be.visible");
    cy.get("#simpleDropContainer > #droppable").should("be.visible");

    cy.wait(2000);

    cy.get("#draggable").drag("#simpleDropContainer > #droppable", {
      force: true,
    });
  });

  it.only("scrolling page", () => {
    // visiting the website

    cy.visit("https://www.reliancedigital.in/");

    cy.wait(3000);

    // scrolling to the element

    cy.get(
      "div[class='footer__container'] div:nth-child(1) div:nth-child(1) div:nth-child(1) h3:nth-child(1)"
    ).scrollIntoView({
      duration: 2000,
    });
    cy.get(
      "div[class='footer__container'] div:nth-child(1) div:nth-child(1) div:nth-child(1) h3:nth-child(1)"
    ).should("be.visible");

    cy.get("img[title='RelianceDigital Logo']").scrollIntoView({
      duration: 3000,
    });
    cy.get("img[title='RelianceDigital Logo']").should("be.visible");
  });
});
