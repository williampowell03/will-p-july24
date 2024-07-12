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

test("Handle high values", () => {
    document.getElementById("loan-amount").value = "1000000";
    document.getElementById("interest-rate").value = "15";
    document.getElementById("months-to-pay").value = "60";

    calculateLoan();

    const expectedPayment = ((1000000 / 60) + (1000000 * (15 * 0.01) / 60)).toFixed(2);
    expect(document.getElementById("payment").textContent).toBe(`Monthly Payment: £ ${expectedPayment}`);
});
