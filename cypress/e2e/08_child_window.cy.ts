describe("handling tabs", () => {
    it.skip("Approach_1", () => {
      // visiting the website (also it's called parent tab)
      cy.visit("https://www.reliancedigital.in/");
  
      // clicking on a link
      cy.xpath(
        "(//a[@title='Motorola Moto G42 64GB, 4GB RAM, Atlantic Green, Mobile Phone'])[1]"
      )
        .invoke("removeAttr", "target")
        .click();
  
      // verifying the link URL
      cy.url().should(
        "include",
        "https://www.reliancedigital.in/motorola-moto-g42-64gb-4gb-ram-atlantic-green-mobile-phone/p/492850894"
      );
  
      // moving to parent tab
      cy.go("back");
    });
  
    it("apprach_2", () => {
      // visiting the website (also it's called parent tab)
      cy.visit("https://www.reliancedigital.in/");
  
      // using Jquery method
      cy.xpath(
        "(//a[@title='Motorola Moto G42 64GB, 4GB RAM, Atlantic Green, Mobile Phone'])[1]"
      ).then((e) => {
        // storing the variable in url
        let url = e.prop("href");
        cy.visit(url);
      });
      cy.url().should(
        "include",
        "https://www.reliancedigital.in/motorola-moto-g42-64gb-4gb-ram-atlantic-green-mobile-phone/p/492850894"
      );
  
      // moving to parent tab
      cy.go("back");
    });
  });
  