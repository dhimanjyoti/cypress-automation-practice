// '=>' is called fat arrow
describe('Use of locators', ()=> {

    it('CSS Locators', ()=> {

        // visiting the website
        cy.visit('https://ecommerce-playground.lambdatest.io/');

        // find element using ID and tag attribute
        cy.get("div[id='entry_217822'] input[placeholder='Search For Products']").type('iMac');
        // clicking on the search button
        // using class locator
        //click() method will click on the button 
        cy.get('.type-text').click();

        // verifying the page after clicking on the page
        // This is also called assertion.
        cy.get("div[id='entry_212456'] h1").should('have.text','Search - iMac');

    })

        it("css locators", () => {
          // visit the website
          cy.visit("https://www.reliancedigital.in/");
          cy.wait(3000);

          // clicking on the notification popup -> No Thanks
            cy.get('#wzrk-cancel').click();
      
          // search a product using ID locator
          cy.get("#suggestionBoxEle")
            .type("earphone")
            .should("have.value", "earphone");

          // click on the seach button
          cy.get("#RIL_HomeSearchButton").click();
        //   cy.wait(3000);
      
          // // verify the page result with search reasult
          cy.get("div[class='pl__headline']").contains("Headphones & Headsets");
      });
      
})
