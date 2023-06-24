describe('Intercepting API(spying) request after clicking on a link',()=> {

    beforeEach(()=> {
        cy.visit(`${Cypress.env("demoQA")}/links`);
        // intercepting the newwork request 
        cy.intercept("GET",`${Cypress.env("demoQA")}/created`).as("linkStatus");
    });

    it('getting the spying details',()=> {
        cy.get('a#created').click();
        cy.wait("@linkStatus").then((request) => {
            cy.log('Intercepted request', request);
            // Asserting the request
            expect(request.response.statusCode).to.be.equal(201);
            expect(request.response.statusMessage).to.be.equal("Created");
        })
    })
})