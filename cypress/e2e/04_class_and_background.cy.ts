describe('click challenges', ()=> {
    beforeEach(()=> {
        cy.visit("http://uitestingplayground.com/click");

    })

    it('class assertion', ()=> {
        cy.get("#badButton").click().should("have.class", "btn-success");
    })

    it('background assertion', ()=> {
        cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69)")
    })
})