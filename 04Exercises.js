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

// REDO
function range(start, end, step) {
  let ret = [], i = start;
  while (i !== end) {
    ret.push(i);
    step ?
      i += step
      : i += 1;
  }
  ret.push(i);
  return ret;
}

function sum(array) {
  let ret = 0;
  for (let i = 0; i < array.length; i++) {
    ret += array[i];
  }
  return ret;
}

// ------------------- Reversing an array

function reverseArray(array) {
  let retArray = [];
  for (let element of array) {
    retArray.unshift(element);
  }
  return retArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0, j = array.length-1; i < j; i++, j--) {
    let front = array[i], back = array[j];
    array[i] = back;
    array[j] = front;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// ------------------- A List

function arrayToList(array) {
  let rtnList = null, i = array.length-1;
  while (i >= 0) {
    let temp = {
      value: array[i],
      rest: rtnList
    }
    rtnList = temp;
    i--;
  }
  return rtnList;
}

function listToArray(list) {
  let rtnArray = [];
  while (list.rest != null) {
    rtnArray.push(list.value);
    list = list.rest;
  }
  rtnArray.push(list.value);
  return rtnArray;
}

function prepend(num, list) {
  return rtnList = {value: num, rest: list};
}

function nth(list, num) {
  while (num !== 0) {
    list = list.rest;
    num--;
  }
  return list.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// ------------------- Deep Comparison

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (obj1 == null || obj2 == null || typeof obj1 != "object" || typeof obj2 != "object") return false;

  let keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true */
