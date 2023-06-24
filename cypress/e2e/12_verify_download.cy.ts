describe("download File", () => {
    it("download a file", () => {
      cy.visit("https://filesamples.com/categories/image");
  
      // click on the jpge 2000 file format
      cy.xpath("//a[text()='Get .jp2 samples']").click();
      cy.wait(4000);
  
      // downloading a simple file
      cy.xpath('(//a[@href="/samples/image/jp2/sample1.jp2"])[1]').click();
  
      // navigate back to the image file sample page
      cy.go("back");
  
      // click on the Multiple-image Network Graphics File format
      cy.xpath("//a[text()='Get .mng samples']").click();
      cy.wait(3000);
  
      // download a sample Multiple-image Network Graphics File
      cy.xpath("(//a[@href='/samples/image/mng/sample_640×426.mng'])").click();
    });
  
    it("downloading file with the help of plugin", () => {
      cy.visit(
        "https://file-examples.com/index.php/sample-images-download/sample-jpg-download/"
      );
  
      cy.downloadFile(
        "https://file-examples.com/storage/fe396452246495b989f22f7/2017/10/file_example_JPG_100kB.jpg",
        "cypress/downloads",
        "random.jpg"
      );
    });
  
    it("verify download file", () => {
      cy.readFile("cypress/downloads/random.jpg");
      cy.readFile("cypress/downloads/sample_640×426.mng");
      cy.readFile("cypress/downloads/sample1.jp2");
  
      cy.verifyDownload("random.jpg");
      cy.verifyDownload("sample_640×426.mng");
      cy.verifyDownload("sample1.jp2");
  
      // visiting the website
      cy.visit("https://filesamples.com/formats/nef");
  
      cy.xpath('(//a[@href="/samples/image/nef/sample1.nef"])[1]').click();
      cy.readFile("cypress/downloads/sample1.nef", { timeout: 20000 });
  
      // using verifydownload command
      cy.verifyDownload("sample1.nef", { timeout: 20000 });
  
      // reading what's inside a text file
  
      cy.readFile("cypress/downloads/random.txt").should(
        "contain",
        "Hello, This is Jack Ryan."
      );
    });
  });
  