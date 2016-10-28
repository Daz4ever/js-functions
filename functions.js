//1) Write a function that takes an array of numbers and returns a new array of only positive numbers

// long version creating a function that loops through array and finds each value then calling the function
// and implementing a function for its action.
function ArrayOfNumbers(array, action) {
  for(var i=0; i < array.length; i ++) {
    action(array[i]);
  }
}

var myArray = [1, 3, -3, 5, 4, 6, -7];
var pos = [];
ArrayOfNumbers(myArray, function positives(number) {
  if (number > 0) {
pos.push(number);
  }
});

console.log(pos);

// short way using built in forEach

myArray.forEach(function positives(number) {
  if (number < 0) {
  even.push(number);
  }
});
console.log(pos);
// Write a function which takes an array of numbers as input and returns a new array
// containing only the even numbers in the given array.


var myArray = [1, 3, -3, 5, 4, 6, -7];

var positives = myArray.filter(function positive(n) {
  return (n % 2 === 0);
});
console.log(even);


// Given this function:
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.
function hello() {
  console.log("Hello, World!");
}

function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(hello);

// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times.

function hello() {
  console.log('Hello There!');
}

function callNTimes(times, func) {
  for (var i=0; i<times; i++) {
     func();

  }
}

callNTimes(5, hello);
