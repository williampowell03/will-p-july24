const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

// Load the HTML file into a simulated DOM environment
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
const { document } = new JSDOM(html).window;

//Globalising document
global.document = document;
global.window = document.defaultView;

// Import the function from index.js
const { calculateLoan } = require("../index.js");


test("Initial load values are correct", () => {
    // Test initial values
    expect(document.getElementById("loan-amount").value).toBe("10000");
    expect(document.getElementById("interest-rate").value).toBe("10");
    expect(document.getElementById("months-to-pay").value).toBe("12");
});

test("Calculate loan payment correctly", () => {
    // Set values
    document.getElementById("loan-amount").value = "20000";
    document.getElementById("interest-rate").value = "5";
    document.getElementById("months-to-pay").value = "24";

    // Trigger calculation
    calculateLoan();

    // Verify expected output
    const expectedPayment = ((20000 / 24) + (20000 * (5 * 0.01) / 24)).toFixed(2);
    expect(document.getElementById("payment").textContent).toBe(`Monthly Payment: £ ${expectedPayment}`);
});


test("Handle negative and zero values", () => {
  document.getElementById("loan-amount").value = "-5000";
  document.getElementById("interest-rate").value = "0";
  document.getElementById("months-to-pay").value = "0";

  calculateLoan();

  expect(document.getElementById("payment").textContent).toBe("Monthly Payment: £ NaN");
});
