import { defineConfig } from "cypress";
// verify download import
const { verifyDownloadTasks } = require("cy-verify-downloads");
// Downloadfile import
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // verify download import
      on("task", verifyDownloadTasks);
      // -----------------------------
      // DownloadFile import
      on("task", { downloadFile });
    },
    env: {
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      Angular: "https://www.globalsqa.com",
    },
    viewportHeight: 1000,
    viewportWidth: 1400,
  },
});
