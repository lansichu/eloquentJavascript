var assert = require('assert')

// ------------------- Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((output, current) => output.concat(current)))

// ------------------- Your Own Loop

function loop(value, testFunc, updateFunc, bodFunc) {
  /* for (let start = value; testFunc(start); start = updateFunc(start)) {
    bodFunc(start);
  } */

  while (testFunc(value)) {
    bodFunc(value);
    value = updateFunc(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// ------------------- Everything

function every(array, test) {
  let ret = true;
  /* Version 1: with loop
  array.forEach(a => ret = (test(a) && ret));
  return ret; */
  // Version 2: with `some`
  return (!array.some(a => !test(a)));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


// ------------------- Dominate Writing Direction

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  /*
  	1. Iterate through the characters of the text
    2. For each character, figure out which range of unicode it belongs in
       thus which lanuage
    3. Accumulate based on the lanuage
    4. Get the length of the text and see which is the dominate lanuage
    5. Get the direction of the dominate language
  */
  let scripts = [];
  for (let char of text) {
    let script = characterScript(char.codePointAt(0));
    let name = script ? script.name : "none";
    let direction = script ? script.direction : "none";
    let known = scripts.findIndex(i => i.name == name);
    if (known == -1) {
      scripts.push({name, count: 1, direction});
    } else {
      scripts[known].count++;
    }
  }

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found!";

  let dominate = scripts.reduce((a, b) => a.count > b.count ? a : b);
  return dominate.direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
