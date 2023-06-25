describe("Handling file upload", () => {
  it("File uploads", () => {
    // visiting the website
    cy.visit("https://fineuploader.com/demos.html");

    // uploading the file
    cy.get("div[class='buttons'] input[title='file input']").attachFile(
      "1200px-Sunflower_from_Silesia2.jpg"
    );
    cy.get("div[class='buttons'] button[type='button']").click();
    // wait till file get uploaded
    cy.wait(3000);

    // verify whether the file is uploaded or not
    cy.get(".qq-file-id-0.qq-upload-success").should("be.visible");
  });

  it("File upload - rename", () => {
    // visiting the website
    cy.visit("https://fineuploader.com/demos.html");

    // Renaming the file during upload
    cy.get("div[class='buttons'] input[title='file input']").attachFile({
      filePath: "1200px-Sunflower_from_Silesia2.jpg",
      fileName: "TestFile.jpg",
    });
    cy.get("div[class='buttons'] button[type='button']").click();
    // wait till file get uploaded
    cy.wait(3000);

    // verify whether the file is uploaded or not
    cy.get("span[title='TestFile.jpg']").should("have.text", "TestFile.jpg");
  });

  it("File upload - Drag and Drop", () => {
    // visiting the website
    cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/");

    // uploading the file
    cy.get("#file").attachFile("1200px-Sunflower_from_Silesia2.jpg", {
      subjectType: "drag-n-drop",
    });

    // verifying the success message
    cy.get(".box__success").should("contain.text", "Done!");
  });

  it("Multiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    const yourFixturePath = "1200px-Sunflower_from_Silesia2.jpg";
    const yourFixturePath1 = "snickers.jpg";

    // uploading the file
    cy.get("#filesToUpload").attachFile([yourFixturePath, yourFixturePath1]);
    // Get all the elements matching the locator
    // The expression index === 0 checks if the value of the variable index is equal to 0.
    // If it is true, the value assigned to expectedText will be 'First Item'.
    // If the condition is false, the value assigned to expectedText will be 'Second Item'.
    cy.get('ul[id="fileList"] > li').each(($element, index) => {
      // Define the expected text for each element
      const expectedText =
        index === 0 ? "1200px-Sunflower_from_Silesia2.jpg" : "snickers.jpg";

      // Assert the text of each element
      cy.wrap($element).should("contain", expectedText);
    });
  });

  it("Shadow Dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );

    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "1200px-Sunflower_from_Silesia2.jpg"
    );
    // verifying the image
    cy.wait(2000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "1200px-Sunflower_from_Silesia2.jpg"
    );
  });

  it("shadow dom example", () => {
    cy.visit("https://developer.salesforce.com/signup");

    // finding the shadow dom
    cy.get("dw-de-signup-form")
      .shadow()
      .find(".full-name-field")
      .shadow()
      .find("input[name='first_name']")
      .type("Dhiman", { force: true });
  });
});
