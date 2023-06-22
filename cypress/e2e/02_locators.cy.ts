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
})