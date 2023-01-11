console.log("Connected");


//                           HOMEWORK  1
// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined


function functionType(parameter) {
  console.log(`The type of ${parameter} is ${typeof parameter}`);
}

functionType({});
functionType(true);
functionType(69);
functionType('Hello');
functionType(undefined);


/*                          HOMEWORK  2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well*/



function calculateDogAge(dogYears) {
  
  let humanYears = dogYears * 7;
  return `Your dog is ${humanYears} years old in human years.`
}

function calculateHumanAge(humanYears) {
  
  let dogYears = humanYears / 7;
  return `You are ${dogYears} years old in dog years.`
}

console.log(calculateDogAge(5));
console.log(calculateHumanAge(49));




/*                        HOMEWORK 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/


function atm(){
  let accountMoney = 2000;
  let amountToWithdraw = prompt("How much would you like to withdraw?");
  if (amountToWithdraw <= accountMoney){
    accountMoney = accountMoney - amountToWithdraw;
    console.log("You have withdrawn $" + amountToWithdraw + " and you now have $" + accountMoney + " left in your account.");
  } else {
    console.log("Not enough money");
  }
}

atm();



//                     BONUS


//                           Task 1
//Write a function that takes an integer minutes and converts it to seconds.

function minutesToSeconds(minutes) {
  return minutes * 60;
}

let convert = minutesToSeconds;
console.log(convert(2));
console.log(convert(3));
console.log(convert(5));


//Create a function that takes a number as an argument, increments the number by +1 and returns the result.


function incrementNumber(num) {
  return num + 1;
}

let addition = incrementNumber;
console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

//                   Task 9
/* Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

Number	     Month Name
1	           January
2	           February
3	           March
4	           April
5	           May
6	           June
7	           July
8	           August
9	           September
10	         October
11	         November
12	         December

any other number	Month with that number does not exists*/

 function getMonthName(num) {
   switch (num) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Month with that number does not exist";
  }
  }

  console.log(getMonthName(3));
  console.log(getMonthName(12));
  console.log(getMonthName(6));



  //                        Task 7

  //Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

  function isPlural(word){
    if(word.endsWith("s")){
      return true;
    } else {
      return false;
    }
  }

 console.log(isPlural("changes"));
 console.log(isPlural("change"));
 console.log(isPlural("dudes"));
 console.log(isPlural("magic"));