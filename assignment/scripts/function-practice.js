console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello,' + name;
}
// Remember to call the function to test
console.log("Say hello to my little friend.", helloName( ' Pal'))

let numberOne = 5;
let numberTwo = 8;
// 3. Function to add two numbers together & return the result
function addNumbers( numOne, numTwo ) {
  // return firstNumber + secondNumber;
  return numOne + numTwo;
}
console.log('Math Check:', numberOne, '+', numberTwo, '=', addNumbers( numberOne, numberTwo) )

let numberThree = 10;
// 4. Function to multiply three numbers & return the result
function multiplyThree( numOne, numTwo, numThree ){
  return numOne * numTwo * numThree;
}
console.log('Math Check:', numberOne, '*', numberTwo, '*', numberThree, '=', multiplyThree( numberOne, numberTwo, numberThree ));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
let PositiveTestNum = 9
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
console.log(PositiveTestNum,'is a postive number:', isPositive(PositiveTestNum));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
let isPostiveTest1 = 3;
let isPostiveTest2 = 0;
let isPostiveTest3 = -3;

console.log( isPostiveTest1, 'is Positive - should say true: Function returns', isPositive(isPostiveTest1) );
console.log( isPostiveTest2, 'is Not Positive - should say false: Function returns', isPositive(isPostiveTest2) );
console.log( isPostiveTest3, 'is Not Positive - should say false: Function returns', isPositive(isPostiveTest3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let colors = ['blue', 'red', 'orange', 'green']
let colorsEmpty = [];
function getLast( array ) {
  if(array.length > 0){
  return array[array.length -1];
  } // end if
  else {return 'undefined.';
} // end else
} // end getLast function

console.log( "The last item in the colors array is:", getLast( colors ) );
console.log( "The last item in the colorsEmpty array is:", getLast( colorsEmpty ) );


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let testValue1 = 'dog';
let testValue2 = 'donkey';
let testValue3 = 'turtle';
let animals = ['dog', 'cat', 'turtle', 'horse'];
let foundItem = false;

console.log( 'The animals in the array are:', animals.join(', ') + '.' );

function findFunction( value, array ){
  for(let i=0; i<array.length; i++){
    if (array[i] === value){
      foundItem = true;
    } //end if
    } // end for loop
  
  if (foundItem === true){
    foundItem = false;
    return true + ', ' + value + ' was found at index: ' + array.indexOf( value );
  }
  else{
   return false + ', ' + value + ' was not found!';
  }
} // end find function

console.log('Is', testValue1, 'in the animals array?', findFunction( testValue1, animals ));
console.log('Is', testValue2, 'in the animals array?', findFunction( testValue2, animals ));
console.log('Is', testValue3, 'in the animals array?', findFunction( testValue3, animals ));

// ----------------------
// Stretch Goals
// ----------------------

// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let testLetter1 = "T"
let testLetter2 = "Z"
let testString = "This is a Test"
function isFirstLetter(letter, string) {
  if (string[0] === letter ){
    return true
  } // end if
  else{
    return false
  } // end else
} // end isFirstLetter function
console.log( 'Is', testLetter1, 'the first letter of this string?', '\"', testString, '\":', isFirstLetter(testLetter1, testString) );
console.log( 'Is', testLetter2, 'the first letter of this string?', '\"', testString, '\":', isFirstLetter(testLetter2, testString) );


// 9. Function to return the sum of all numbers in an array
let sum = 0;
let numbersArray1 = [6,7,8,9,10,11,12,13];
let numbersArray2 = [14,15,16,17,18,19,20]

function sumAll(array ) {
  // TODO: loop to add items
  for(let i=0; i<array.length; i++){
    sum += array[i];
  } // end for loop
  return sum;
} // end sumAll function

console.log( 'The values of this array (', numbersArray1.toString(), ') sum to the value of:', sumAll(numbersArray1));
console.log( 'The values of this array (', numbersArray2.toString(), ') sum to the value of:', sumAll(numbersArray2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let mixNumberArray = [-5, 5,-8,8,10,-10,13,-13];
let positiveNumberArray = [];

function numberMover( initArray, destArray ){
 for( let i=0; i<initArray.length; i++){
    if(initArray[i] > 0){
      destArray.push(initArray[i]);
    }
 } // end for loop
console.log(
  'The initial arry has',
  initArray.length, 'numbers. (' +
  initArray.join(', ') + ').', 
  destArray.length, 'are positive. They are: (' +
  destArray.join(', ') + ').'
) // end console.log
} // end numberMover function

// run numberMover function:
numberMover( mixNumberArray, positiveNumberArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//Problem on online challenge:
// Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

let changeNeeded = prompt('how much change is needed? \(ex. 1.89 or 0.75\)');
let remainingChange = changeNeeded;
let coinValuesToUse = [1, .25, .1, .05, .01];
let coinsToUse = ['Dollar', 'Quarter', 'Dime', 'Nickle', 'Penny' ];
let coinsNeeded = [];
let dollar = 0;
let quarter = 0;
let dime = 0;
let nickle = 0;
let penny = 0;


function changeCheck(){
  while (changeNeeded > 5 || changeNeeded < .01 ){
    alert( 'This function only supports positive values less than $5.00 Please try again.');
    let tryAgain = prompt('how much change is needed? \(ex. 1.89 or 0.75\)');
    changeNeeded = tryAgain;
    remainingChange = tryAgain;
  }
}

function roundUpChange(){
    Math.round((remainingChange * 1000)/1000);
}


changeCheck();

function changeProvider (change, coins){
  changeCheck();
  roundUpChange();
    while( remainingChange > .01 ){
    if( remainingChange >= 1 ){
      remainingChange -= coins[0];
      coinsNeeded.push(coinsToUse[0]);
    } // end if
    else if( remainingChange < 1 && remainingChange >= .25 ){
      remainingChange -= coins[1];
      coinsNeeded.push(coinsToUse[1]);
    } // end else if
    else if( remainingChange < .25 && remainingChange >= .1 ){
      remainingChange -= coins[2];
      coinsNeeded.push(coinsToUse[2]);
    } // end else if
    else if( remainingChange < .1 && remainingChange >= .05 ){
      remainingChange -= coins[3];
      coinsNeeded.push(coinsToUse[3]);
    } // end else if
    else if(remainingChange < .05 && remainingChange >= .01 ){
      remainingChange -= coins[4];
      coinsNeeded.push(coinsToUse[4]);
    } // end else
    else{
      alert("Value found outside normal currency demoninations. Change may be innacurate.");
      break
    }
  } // end while loop
  for( let i=0; i<coinsNeeded.length; i++ ){
        if(coinsNeeded[i] === 'Dollar'){
          dollar++;
        } // end if
        else if(coinsNeeded[i] === 'Quarter'){
          quarter++;
        } // end if
        else if(coinsNeeded[i] === 'Dime'){
          dime++;
        } // end else if
        else if(coinsNeeded[i] === 'Nickle'){
          nickle++;
    } // end else if
    else if(coinsNeeded[i] === 'Penny'){
          penny++;
    } // end else if
  } // end for loop
  let customerNeed  = ['\$', change, ': Please give them', dollar, 'dollars,', quarter, 'quarters,', dime, 'dimes,', nickle, 'nickles, and', penny, 'pennies.']
  console.log(
    'The customer needs \$' + change, 'in change.', customerNeed.join(' ')
  );
  alert(customerNeed.join(' '));
} // end changeProvider function

// run changeProvider function
changeProvider( changeNeeded, coinValuesToUse );