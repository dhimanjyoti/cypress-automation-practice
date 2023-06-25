describe("Google search session word", () => {
  it('verify that user is able to find the suggested word "selenium tutorial" after typing "selenium" in the search box', () => {
    // visiting the website
    cy.visit("https://www.google.com");

    // Type selenium in the search box
    cy.get("textarea[class='gLFyf']").type("selenium");

    // Click on the selenium tutorial suggested search
    cy.contains("selenium tutorial").click();

    // Get the text of the suggested search word
    //    cy.contains('selenium tutorial').then((element)=> {
    cy.get("#APjFqb")
      .invoke("val")
      .then((word: string) => {
        const vowelCount: number = countVowel(word);
        const consonantCount: number = countConsonent(word);

        // loggin the details
        cy.log(`Word - ${word}`);
        cy.log(`Number of Vowel are: ${vowelCount}`);
        cy.log(`Number of Consonant are: ${consonantCount}`);
      });
  });
});

// Function to conut the number of vowels in the suggested word
function countVowel(word: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;
  // The char parameter in the arrow function represents the current character being processed in each iteration of the loop
  word
    .toLocaleLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) {
        count = count + 1;
      }
    });
  return count;
}

// Function to count the number of constants in the suggested word
function countConsonent(word: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let count: number = 0;

  // the split method is used to split the lowercase word into an array of characters
  word
    .toLocaleLowerCase()
    .split("")
    .forEach((char) => {
      // This condition checks if the character char matches the regular expression /[a-z]/i.
      //The regular expression matches any lowercase letter from a to z, regardless of case (i flag is for case-insensitive matching).
      //If the character matches the regular expression, the condition evaluates to true.
      if (!vowels.includes(char) && char.match(/[a-z]/i)) {
        count = count + 1;
        // count++;
      }
    });
  return count;
}
