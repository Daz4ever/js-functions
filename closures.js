// Make a counter function that returns a function that returns a successive number each time it is called.
//
// > var count1 = counter()
// > var count2 = counter()
// > count1()
// 1
// > count1()
// 2
// > count2()
// 1
// > count2()
// 2
// > count1()
// 3


function counter() {
  var count = 0;
  function a() {
    return count += 1;
  }
  return a;
}

var count1 = counter();
var count2 = counter();
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count1());

// Allow the caller of counter to initialize the count to the first argument that's passed in.
//
// > var count1 = counter(5)
// > count1()
// 5
// > count1()
// 6


function counter(start) {
  var count = start;
  function a() {
    return count += 1;
  }
  return a;
}

var count1 = counter(5);
var count2 = counter();
console.log(count1());
console.log(count1());
