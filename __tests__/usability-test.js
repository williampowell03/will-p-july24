// index.test.js

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

test("Input validation", () => {
    // Test loan amount
    document.getElementById("loan-amount").value = "abc";
    calculateLoan();
    expect(document.getElementById("payment").textContent).toBe("Monthly Payment: £ 0.00");

    // Test interest rate
    document.getElementById("interest-rate").value = "xyz";
    calculateLoan();
    expect(document.getElementById("payment").textContent).toBe("Monthly Payment: £ 0.00");

    // Test months to pay
    document.getElementById("months-to-pay").value = "def";
    calculateLoan();
    expect(document.getElementById("payment").textContent).toBe("Monthly Payment: £ NaN");
});
