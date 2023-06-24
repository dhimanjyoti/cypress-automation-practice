// creating a variable and assign the type as HTMLImgageElement
let image : HTMLImageElement;
describe('Testing broken Images',()=> {
    beforeEach(()=> {
        cy.visit(`${Cypress.env("demoQA")}/broken`);
    })
    it('Testing a normal image',()=> {
        cy.get('div > [src="/images/Toolsqa.jpg"]')
        .should("be.visible")
        .and((img) => {
            //assigning the value of img[0] to image 
            // then converting it to unknown type
            // then again rewriting the type to HTMLImageElement
            image = img[0] as unknown as HTMLImageElement;
            expect(image.naturalWidth).to.be.greaterThan(0);
        })
    })

    it('Testing a broken image', ()=> {
        // and is a chinable command 
        cy.get('div > [src="/images/Toolsqa_1.jpg"]')
        .should("be.visible")
        .and((img)=> {
            image = img[0] as unknown as HTMLImageElement;
            expect(image.naturalWidth).to.be.greaterThan(0);
        })
    })
})