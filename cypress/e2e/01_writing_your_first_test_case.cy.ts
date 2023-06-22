describe('1st test case suite', ()=> {

    it('Navigating to the to website',()=> {
        // visit method will visit the webpage
        cy.visit('https://testautomationu.applitools.com/');

        // Validating the title of the webpage
        cy.title().then((title)=> {
            cy.log(title);
            expect(title).to.be.equal('Test Automation University | Applitools')
        })


    })
})