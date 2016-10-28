//1) Write a function that takes an array of numbers and returns a new array of only positive numbers

// long version creating a function that loops through array and finds each value then calling the function
// and implementing a function for its action.
function ArrayOfNumbers(array, action) {
  for(var i=0; i < array.length; i ++) {
    action(array[i]);
  }
}

var myArray = [1, 3, 5, 4, 6];
var even = [];
ArrayOfNumbers(myArray, function positive(number) {
  if (number % 2 === 0) {
even.push(number);
  }
});

console.log(even);

// short way using built in forEach

myArray.forEach(function positive(number) {
  if (number % 2 === 0) {
even.push(number);
  }
});
