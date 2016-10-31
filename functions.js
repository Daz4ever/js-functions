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
// 2) Write a function which takes an array of numbers as input and returns a new array
// containing only the even numbers in the given array.


var myArray = [1, 3, -3, 5, 4, 6, -7];

var positives = myArray.filter(function positive(n) {
  return (n % 2 === 0);
});
console.log(even);

// 3) Write a function which takes an array of numbers as input and returns a new array containing
// result of squaring each of the numbers in the given array by two.
//  Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var myArray = [1, 3, -3, 5, 4, 6, -7];

var squared = myArray.map(function(n) {
  return n * n;
});
console.log(squared);

// 4) Write a function which takes an array of city objects like such:
//
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var under70 = cities.filter(function cool(town) {
  return town.temperature < 70.0;
});
console.log(under70);

// 5) Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

var cityNames = cities.map(function cool(towns) {
  return towns.name;
});
console.log(cityNames);

// 6) Given an array of people's names:
//
// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.


var goodJob = '';
people.forEach(function good(name) {
    var add = ('Good Job ' + name + '!\n');
    goodJob += add;
});
console.log(goodJob);

// 7) Given an array of strings such the array of names given in the previous problem,
//  sort them by alphabetically order.
console.log(people.sort());


// 8) Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

var sortedNames = people.sort(function shortFirst(name1, name2) {
  return name1.length - name2.length;
});
console.log(sortedNames);



// 9)  Given an array of array of numbers like:
//
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:
//
// [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ]
function sum(array) {
  var mysum = array.reduce(function(a, b) {
    return a + b;
  }, 0);
  return mysum;
}

var sortedArr = arr.sort(function compare(arr1, arr2) {
  return sum(arr1) - sum(arr2);
});


// 10) Given this function:
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

// 11) You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times.

function hello() {
  console.log('Hello There!');
}

function callNTimes(times, func) {
  for (var i=0; i<times; i++) {
     func();

  }
}

callNTimes(5, hello);


// 12) Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.
//
// > sum([1, 2, 3])
// 6

function doSomething(a, b) {
  return a + b;
}
var start = 0;

var sum = function(arr) {
  return arr.reduce.(doSomething, start);
};


console.log(sum([1, 2, 3]));


// var example = function(){
//   // do some stuff
//   return arr.reduce(someFunction, 0);
// }();
//
// console.log(example);
//
// example([2,3,4]);
// example([5,6,7]);


// 13) Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.
//
// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'

 var vip =['very', 'important', 'person'];

var add = function(total, word) {
  return total + word[0];
};
var empty = "";
function acronym(arr) {
  return arr.reduce(add, empty).toUpperCase();
}

console.log(acronym(vip));


// 14) Implement a forEach function which takes two arguments: an array arr and a function fun. It will call fun passing each item in arr to fun as the first argument. Example:
//
// var arr = [
//   { name: 'Bob' },
//   { name:'Alice' },
//   { name:'Joe' }];
// forEach(arr, function(person) {
//   console.log('Hello, ' + person.name + '!');
// });
// The above program will print:
//
// Hello, Bob!
// Hello, Alice!
// Hello, Joe!
// You can use a loop in the implementation of this function.
