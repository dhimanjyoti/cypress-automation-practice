describe("handeling allerts", () => {
  beforeEach(() => {
    // navigating to the website
    cy.visit("https://codenboxautomationlab.com/practice/");
    // hiding the social media ads
    cy.get("div[title='Hide']").click().should("not.be.visible");
  });
  it("alert", () => {
    cy.get("input[class='inputs']").click().type("Dhiman");
    // click on the alert button
    cy.get("#alertbtn").click();

    // validating the alert window
    cy.on("window:alert", (t) => {
      expect(t).to.contains(
        "Hello Dhiman, share this practice page who love to learn automation"
      );
    });
  });

  it("Confirmation alert", () => {
    cy.get("input[class='inputs']").click().type("Dhiman");

    // click on the alert button
    cy.get("#confirmbtn").click();

    // validating the window confirm alert
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Hello Dhiman, Are you sure you want to confirm?");
    });
  });

  it("Confirmation alert - cancelling the alert", () => {
    cy.get("input[class='inputs']").click().type("Dhiman");

    // click on the alert button
    cy.get("#confirmbtn").click();

    // validating the window confirm alert
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Hello Dhiman, Are you sure you want to confirm?");
      // To cancle the confirmation box
      cy.on("window:confirm", () => false);
    });
  });
});

describe("Prompt alert", () => {
  it("Prompt alert", () => {
    // visiting the website
    cy.visit(`${Cypress.env("demoQA")}/alerts`);
    const promptValue = "Dhiman";
    // handling the event
    cy.window().then((win) => {
      //cy.stub(win, "prompt") creates a stub or a mock of the window.prompt method.
      // Stubs are used to replace or intercept certain functions in order to control their behavior during testing.
      cy.stub(win, "prompt").returns(promptValue);
    });
    cy.get("#promtButton").click();

    // validing the text after closing the window
    cy.get("#promptResult[class ='text-success']").should(
      "have.text",
      `You entered ${promptValue}`
    );
  });
});
