function loanCalculator() {
    loanAmount = document.getElementById("loan-amount").value;
  
    interestRate = document.getElementById("interest-rate").value;

    monthlyTerm = document.getElementById("months-to-pay").value;
  
    interest = (loanAmount * (interestRate * 0.01)) / monthlyTerm;
  
    monthlyPayment = (loanAmount / monthlyTerm + interest).toFixed(2);
  }