const SALES_TAX = 0.08;
const PHONE_PRICE = 80;
const ACCESSORY_PRICE = 5;
const SPEND_THRESH = 200;
const BANK_BALANCE = 250;
var phones = 0;
var accessories = 0;
var totalCost = 0;

function calculateTotalCost(input) {
	while (totalCost < BANK_BALANCE); {
		totalCost = totalCost + PHONE_PRICE;
		phones = phones + 1;
		alert(totalCost);
	}
	
	while ((totalCost < SPEND_THRESH) && (accessories < phones)) {
		totalCost = totalCost + ACCESSORY_PRICE;
		accessories = accessories + 1;
	}
	
	totalCost = totalCost * SALES_TAX;
	console.log(totalCost);
	console.log(phones);
	console.log(accessories);
}

console.log(calculateTotalCost(prompt("input")));