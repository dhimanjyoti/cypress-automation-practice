describe("mouse operation", () => {
    beforeEach(()=> {
        // visiting the website
        cy.visit("https://www.reliancedigital.in/");
        cy.wait(3000);
        // clicking on the notification popup -> No Thanks
    cy.get('#wzrk-cancel').click();
    })
  it("MouseHover", () => {
    

    // mouse hover on the 'Mobile & Tablets option
    cy.get("li[id='RIL_MobilesTabletsNavigationNode'] div[class='nav__title']")
      .trigger("mouseover");

    // verify the menu after mouseover
    cy.xpath(
      "(//a[text()='Smartphones'])[1]")
      .invoke("css", "overflow-x", "visible")
      .should("have.text", "Smartphones");
  });
});

describe('Right click operation', ()=> {
    beforeEach(()=> {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    })
  it("Right click", () => {

    // Approach_1
    cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    cy.get(".context-menu-icon-edit >span").should("be.visible");
    
    // clicking on the context menu to hide the popup
    cy.get('#context-menu-layer').click();

    // Approach_2
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(".context-menu-icon-edit >span").should("be.visible");
  });
})

describe('Double click', ()=> {
    beforeEach(()=> {
    cy.visit("https://demoqa.com/buttons");
    })
    it("Double click action", () => {
        // Doubke clicking on the button using triggre
        cy.get("#doubleClickBtn").trigger("dblclick");
        // verifying the DBclick
        cy.get("#doubleClickMessage").should("be.visible");
    
        // Approach_2
        cy.get("#doubleClickBtn").dblclick();
        cy.get("#doubleClickMessage").should("be.visible");
      });
    })

describe("Drag and Drop plugin", ()=> {
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
    
      it("scrolling page", () => {
        cy.visit('https://www.reliancedigital.in/')
        cy.wait(3000);
        // clicking on the notification popup -> No Thanks
        cy.get('#wzrk-cancel').click();
    
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
})
  
describe('mouse click', ()=> {
    beforeEach(()=> {
        cy.visit("http://uitestingplayground.com/mouseover");
    })

    it("mouse hove with real envent -plugin", ()=> {
        cy.get(".text-primary").realHover();
    })
})