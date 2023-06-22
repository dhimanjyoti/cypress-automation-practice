// writing the test case using Arrow function 
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

// same test code using normal function 

describe('1st test suite', function(){

    it('Navigating to the website', function(){
        cy.visit('https://www.lambdatest.com/');

        // validating the webpage title
        cy.title().should('eq','Next-Generation Mobile Apps and Cross Browser Testing Cloud | LambdaTest');
    })
})