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

console.log( animals );

function findFunction(value, array){
  for(let i=0; i<array.length; i++){
    if (array[i] === value){
      return true + ', ' + value + ' is at index: ' + i;
    } //end if
    else {
      return false + ', it cannot be found.';
    } // end else
  } // end for loop  
} // end find function

console.log( findFunction( testValue1, animals ));

console.log('Is', testValue1, 'in the animals array?', findFunction( testValue1, animals));
console.log('Is', testValue2, 'in the animals array?', findFunction( testValue2, animals));
console.log('Is', testValue3, 'in the animals array?', findFunction( testValue3, animals));

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
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
