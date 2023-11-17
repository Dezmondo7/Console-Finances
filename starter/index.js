/*Console Finances*/

var totalProfit = 0;
var totalChange = 0;
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//Number of Months in the data is equal to the number of elements
var totalNumberOfMonths = finances.length;
console.log("The total number of months is " + totalNumberOfMonths);

var newFinances = finances.flat(1); //Creates a flat array which can manipulated

// Created a solution using forEach to seperate the array into two seperate arrays for numbers and strings
var letterArray = []
var numberArray = []

newFinances.forEach((eachItem) => {
  if(isNaN(eachItem)) {
    letterArray.push(eachItem); 
   } else {
    numberArray.push(eachItem);
    }
  });

//Used the Count/reduce function to add the numbers array together  

var totalProfit = numberArray.reduce(Count);
function Count(total, value) {
return total+value;
}
console.log("The total profit = £" + totalProfit);

//Not sure how the difference is -2315 based on looking at the figures
var totalChange = 0;
var numberArray;

for (let i = 0; i < numberArray.length; i++) {
     totalChange += (numberArray[i]++ / totalNumberOfMonths); 
}
console.log("The total change is " + (Math.floor(totalChange)));

/*var numberArray

for (let i = 0; i < numberArray.length; i++) {
function diff (num1, num2) {
  if (num1 > num2) {
    return num1 - num2
  } else {
    return num2 - num1
  }
}
console.log(difference(numberArray));
}
/* Created an array to add the total differences but seem to get something different from what I was expecting :/*/
var numberArray;
function difference(numberArray) {
  var result = [];
  for(var i = 0; i < numberArray.length; i++) {
   result.push(Math.abs(numberArray[i] - numberArray[i - 1]));
}
return result
}
console.log(difference(numberArray));


/*var numberArray;
let createDifference = (numberArray) => {
   const differenceArray = [];
   for(let i = 1; i < numberArray.length; i++){
      differenceArray.push(Math.abs(numberArray[i] - numberArray[i - 1]));
   };
   return differenceArray;
}
console.log(createDifference(numberArray));


/*var numberArray 
var newArray = numberArray.map(n + n);
console.log(newArray);

/*
var finances;

const earningsArray = finances.map((el) => el[1]);

const profitMonths = finances.filter((el) => el[1] > 0);
const salesOnProfitMonths = profitMonths
  .map((el) => el[1])
  .reduce((accVal, curVal) => accVal + curVal, 0);

const avgOfProfitAndLoss =
  earningsArray.reduce((accVal, curVal) => accVal + curVal, 0) / data.length; // get the average of all total and losses

const maxMonth = {
  monthName: '',
  profit: 0,
};

const minMonth = {
  monthName: '',
  profit: 0,
};

data.forEach((month) => {
  if (month[1] > maxMonth.profit) {
    maxMonth.monthName = month[0];
    maxMonth.profit = month[1];
  }

  if (month[1] < minMonth.profit) {
    minMonth.monthName = month[0];
    minMonth.profit = month[1];
  }

  return { maxMonth, minMonth };
});

console.log('Total sale of profit months: ', salesOnProfitMonths);
console.log('Total average : ', avgOfProfitAndLoss);
console.log('The month with max profit is : ', maxMonth);
console.log('The month with min profit is : ', minMonth);






/*for (var i = 0; i < numberArray.length; i++);
totalChange == numberArray + numberArray[i];
console.log(totalChange);

//Find the average change difference of the array
var totalMonthlyDifference = 0;
for (var i = 0; i < numberArray.length; i++);
totalMonthlyDifference === numberArray[i] + numberArray;
i++;

console.log(totalMonthlyDifference[i]);*/














/*var newFinances = newFinances.reduce(Count);
function Count(total, value) {
return total+value;
}
console.log(newFinances);*/



// var newFinances;  
// var i = 0;
//var total = 0;
//for (let i = 0; i < newFinances.length; i++);
//total += newFinances[i];


//var prices = 0;
//var total = 0;

//for (let i = 0; i < newFinances.length; i++) {
//  total += prices[i];
//}
//console.log(total);

/*
console.log(sum);

var merge1;
var evens = _.remove(merge1, function(n) { return n % 2 === 0;});console.log(merge1)

var totals = merge1.reduce(Count);
function Count(total, value) {
return total+value;
}
console.log(totals);

/*var totalPrice = finances.reduce(function(accumulator, currentPurchase) {
  return accumulator + currentPurchase.price;
}, 0);

console.log("Total Price:", totalPrice);

/*months = finances.length;
console.log("The number of months " + months);

totalProfit = months + finances;
console.log(totalProfit);

/*let i = 0;
for (let i = 0; i < months; i++);
function totalProfit = */


/*Calculates the number of elements in the array*/
/*months = finances.length;
console.log("The number of months " + months);

/*Grabs the [0] index of the array elements which is the first element ['Jan-2010', 867884];*/
/*var jan = finances[0];
console.log(jan);

/*grabs the last element from the array['Feb-2017', 671099] */
/*var last = finances[finances.length -1];
console.log(last);

/* Loop over each item and logs the item with index number in the array*/
/*finances.forEach((item, index, array) => {console.log(item, index);})

/*ARRAY METHODS*/
/*makes the array into a string*/
/*console.log(finances.toString());

/*grabs the last element off the Array */
/*var last1 = finances.pop();
console.log(last1);

var last2 = finances.length -1;
console.log(last2);

/* adds an element to the end of an array */
/*finances.push("Julember-2020");
console.log(finances);

/*shifts all the elements of an array by one,removing the first elementin the list in the process*/
/*finances.shift();
console.log(finances);

/*adds an element and increases the index of the array by one*/
/*finances.unshift("Dezember");
console.log(finances);

/*concat merges two strings together*/
/*var monthlyFinances = ["2000", "2001", "2002"];
var yearlyFinances = finances.concat(monthlyFinances);
console.log(yearlyFinances);

/* sorts the arrayin ascending order alphabetically */
/*finances.sort();
console.log(finances);

/* reverse sorts the array in ascending alphabatical order */
/*finances.reverse();
console.log(finances);

/*Map Method - Map is used to create a new array out of an existing one by applying a function but it does not hange the existing array*/
/*var num1 = [2, 3, 4, 5, 6]
var num2 = num1.map(multiply);
function multiply(value) {
  return value * 2
}
console.log(num2)

/*.Filter Method, returns a true or false statement and if the statement returns true it gets pushed to the outer statement*/
/*var num3 = num1.filter(comp); 
function comp(value) {
return value>4;
}
console.log(num3);

/*.Return-returns the value of of items count*/
/*var num4 = num1.reduce(Count);
function Count(total, value) {
return total+value;
}
console.log(num4);

/*See what this does lmao*/
/*var yearlyFinances = finances.concat(Count);
function concat(total, value) {
return total+value;
}
console.log(yearlyFinances);
/*let i = 0;
for (let i = 0; i < finances.length; i++);
   console.log(finances[1]);*/



/*function janMonthCount() {
  let map = {};

  for (let i = 0; i < finances.length; i++) {
    let item = finances[i];
    map[item] = (map[item] + 1) || 1;
  }
  return map;
}
janMonthCount(finances);*/




/*for (i = 0; i < finances.length; i++ ) {    if (totalNumberOfMonths = 0 == '2010') 
    totalNumberOfMonths++; 
  console.log(totalNumberOfMonths)
}  */
  
