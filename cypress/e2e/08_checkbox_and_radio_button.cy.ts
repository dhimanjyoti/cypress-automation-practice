describe("UI element example", () => {
    it("checking radio button", () => {
      // visiting the website
      cy.visit("https://codenboxautomationlab.com/practice/");
  
      // clicking on the radio button
      cy.get("input[value='radio1']").should("be.visible");
      cy.get("input[value='radio2']").should("be.visible");
      cy.get("input[value='radio3']").should("be.visible");
  
      // hiding the social media ads
      cy.get("div[title='Hide']").click().should("not.be.visible");
  
      // selecting radio button
      cy.get("input[value='radio1']").check().should("be.visible");
      cy.get("input[value='radio2']").should("not.be.checked");
      cy.get("input[value='radio3']").should("not.be.checked");
    });
  
    it("playing with checkboxs", () => {
      // visiting the website
      cy.visit("https://codenboxautomationlab.com/practice/");
  
      // hiding the social media ads
      cy.get("div[title='Hide']").click().should("not.be.visible");
  
      // checking the visibility of the application
      cy.xpath("//input[@id='checkBoxOption1']").should("be.visible");
  
      // seleting the single checkbox
      cy.xpath("//input[@id='checkBoxOption1']").check().should("be.checked");
  
      // unselecting the checkbox
      cy.xpath("//input[@id='checkBoxOption1']")
        .uncheck()
        .should("not.be.checked");
  
      // work with multiple checkboxes
      cy.get("input[type='checkbox']").check().should("be.checked");
  
      // To uncheck all the checkboxes
      cy.get("input[type='checkbox']").uncheck().should("not.be.checked");
  
      // select the first checkbox
      cy.get("input[type='checkbox']").first().check().should("be.checked");
      cy.get("input[type='checkbox']").last().check().should("be.checked");
    });
  });
  