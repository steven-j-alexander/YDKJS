const SALES_TAX = 0.08;
const PHONE_PRICE = 80;
const ACCESSORY_PRICE = 5;
const SPEND_THRESH = 200;
var phones = 0;
var accessories = 0;
var totalCost = 0;

function calcTax(cost) {
  return cost + (cost * SALES_TAX);
}

function priceFormat(price) {
  return '$' + price.toFixed(2);
}

function calculateTotalCost(bankBalance) {
  //continue buying while you have enough for another phone
  while ((totalCost + PHONE_PRICE) <= bankBalance) {
    totalCost = totalCost + PHONE_PRICE;
    phones = phones + 1;
    while ((totalCost < SPEND_THRESH) && (accessories < phones)) {
      totalCost = totalCost + ACCESSORY_PRICE;
      accessories = accessories + 1;
    }
  }

  //calculate your taxes
  totalCost = calcTax(totalCost);
}

var bankBalance = prompt('Please enter your bank account balance');
calculateTotalCost(bankBalance);
console.log('Total cost of purchase /w tax is: ' + priceFormat(totalCost) +
  ' for ' + phones + ' phones and ' + accessories + ' accessories.');
if (phones == 0) {
  console.log("You can't afford anything.");
} else if (totalCost <= bankBalance) {
  console.log('You can afford this purchase.');
} else {
  console.log('You CANNOT afford this purchase.');
}
