// Increasing the defaultCommandTimeout for specific test (In a test lavel)
Cypress.config("defaultCommandTimeout", 16000);
describe('Retry-ability demo',()=> {

    it('visit a website with delay', ()=> {
        cy.visit('http://uitestingplayground.com/clientdelay');
        cy.get('#ajaxButton').click();
        cy.get('.bg-success').should("have.text","Data calculated on the client side.");

    })

    // Prograss Bar challenge

    it('Handeling the timeOut for Prograss Bar', ()=> {
        cy.visit('http://uitestingplayground.com/progressbar');
        cy.get('#startButton').click();
        // Giving option object to specify the timeout for the specefic locator
        cy.get('#progressBar', {timeout: 300000}).should('have.text', '100%')
    })
})