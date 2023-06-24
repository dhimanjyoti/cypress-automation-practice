describe("Accordian", ()=> {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/accordian`);
    });

    it("Default Accordion validation example", ()=> {
        cy.get("#section2Heading").click();
        // checking whether the 1st discription is hidden correctly
        // .next() command to target its next sibling element
        cy.get("#section1Heading").next().should("have.css", "display", "none");
        // checking if the second description is displayed
        // .next() command to target its next sibling element
        cy.get("#section2Heading").next().should("have.css","display", "block")
        .and("have.class", "show");
    })
})