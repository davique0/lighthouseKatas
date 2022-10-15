/*We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)*/


const calculateChange = function(total, cash) {
let change = {};
let difference = cash - total;
while(difference > 0) {
  if(difference >= 2000) {
    if(change.twentyDollar === undefined) {
      change.twentyDollar = 0;
    } else {
    change.twentyDollar += 1;
    difference -= 2000;
    }
  } else if (difference >= 1000) {
    if(change.tenDollar === undefined) {
      change.tenDollar = 0;
    } else {
    change.tenDollar += 1;
    difference -= 1000;
    }
  } else if (difference >= 500) {
    if(change.fiveDollar === undefined) {
      change.fiveDollar = 0;
    } else {
    change.fiveDollar += 1;
    difference -= 500;
    }
  } else if (difference >= 200) {
    if(change.twoDollar === undefined) {
      change.twoDollar = 0;
    } else {
    change.twoDollar += 1;
    difference -= 200;
    }
  } else if (difference >= 100) {
    if(change.oneDollar === undefined) {
      change.oneDollar = 0;
    } else {
    change.oneDollar += 1;
    difference -= 100;
    }
  } else if (difference >= 25) {
    if(change.quarter === undefined) {
      change.quarter = 0;
    } else {
    change.quarter += 1;
    difference -= 25;
    }
  } else if (difference >= 10) {
    if(change.dime === undefined) {
      change.dime = 0;
    } else {
    change.dime += 1;
    difference -= 10;
    }
  } else if (difference >= 5) {
    if(change.nickel === undefined) {
      change.nickel = 0;
    } else {
    change.nickel += 1;
    difference -= 5;
    }
  } else if (difference >= 1) {
    if(change.penny === undefined) {
      change.penny = 0;
    } else {
    change.penny += 1;
    difference -= 1;
    }
  }
}
return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));