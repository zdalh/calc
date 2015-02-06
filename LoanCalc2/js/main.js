function LoanCalc2() {
	this.calcLoanSameInterestAndPrincipal = function(amount, months, monthRate) {
		return (amount * monthRate * Math.pow(1 + monthRate, months)) / (Math.pow(1 + monthRate, months) - 1);
	}
	
	this.calcLoanSamePrincipal = function(amount, months, monthRate) {
		var month = 0;
		var everyMonth = new Array();
		var principalPerMonth = amount / months;
		for (month = 0; month < months; month++) {
			everyMonth[month] = principalPerMonth + (amount - principalPerMonth * month) * monthRate;
		}
		return everyMonth;
	}
}