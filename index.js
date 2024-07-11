//Defining the calculateLoan function to calculate the monthly payment
function calculateLoan() {
    loanAmount = document.getElementById("loan-amount").value; //Defining the loanAmount variable by HTML ID
  
    interestRate = document.getElementById("interest-rate").value; //Defining the interestRate variable by HTML ID

    monthlyTerm = document.getElementById("months-to-pay").value; //Defining the monthlyTerm variable by HTML ID
  
    interest = (loanAmount * (interestRate * 0.01)) / monthlyTerm; //Defining the interest variable to calculate the interest rate using a formula calculation
  
    monthlyPayment = (loanAmount / monthlyTerm + interest).toFixed(2); //Defining the monthlyPayment variable to calculate the monthly payment needed to pay the loan
    
    document.getElementById( //Looking at the function caller and identifying an ID
        "payment" //ID to identify
      ).innerHTML = `Monthly Payment: £ ${monthlyPayment}`; //Amends the HTML file to include the monthly payment variable
  } //Closing the function

module.exports = { calculateLoan };