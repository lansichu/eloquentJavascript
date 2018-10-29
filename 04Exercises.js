var assert = require('assert')

// The Sum of a Range

function range(start, end) {
  let numArray = [];
  for (let i = start; i <= end; i++) {
    numArray.push(i);
  }
  return numArray;
}

function sum(arr) {
  let res = 0;
  for (let i = arr.length-1; i >= 0; i--) {
    res += arr[i];
  }
  return res;
}

console.log(sum(range(1, 10)));

// --- bonus

function range(start, end, step) {
  let numArray = [];
  if (start < end) {
      for (let i = start; i <= end; i++) {
        if (step !== undefined) {
          numArray.push(i + step);
        } else {
          numArray.push(i);
        }
      }
  } else {
    for (let i = start; i >= end; i--) {
        if (step !== undefined) {
          numArray.push(i + step);
        } else {
          numArray.push(i);
        }
      }
  }

  return numArray;
}

function sum(arr) {
  let res = 0;
  for (let i = arr.length-1; i >= 0; i--) {
    res += arr[i];
  }
  return res;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
