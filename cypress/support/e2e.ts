import 'cypress-xpath';

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events";
require('cypress-xpath');
require('@4tw/cypress-drag-drop')

// Hide fetch/XHR requests from command log
// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");

  app.document.head.appendChild(style);
}

// To hanlde the uncaught exception error
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
