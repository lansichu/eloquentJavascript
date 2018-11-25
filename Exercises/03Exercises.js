var assert = require('assert')
// QuickCheck for generating tests 

// Minimum -----------------------------

// Write a function that takes two arguments and return their minimum

/*
const min = function(a, b) {
	if (a >= b) {
    	return b;
    } else {
    	return a;
    }
};
*/

function min(a, b) {
	return (a >= b) ? b : a;
}

function testMin() {
    assert.strictEqual(min(2, 1), 1)
}

// Recursion -----------------------------
/*
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

/*
function isEven(num) {
	return (num % 2 === 0);
};
*/

function isEven(num) {
  	num = Math.abs(num);
	if (num === 0) return true;
  	if (num === 1) return false;
  	num -= 2;
  	return isEven(num);
}

function testIsEven() {
    assert.strictEqual(isEven(4), false)
}

// Bean Counting -----------------------------

/*
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
*/


// function countBs(str) {
// 	let count = 0;
// 	for (let i = 0; i < str.length; i++) {
//     	if (str[i] === 'B') count++;
//     }
//   return count;
// }

function countBs(str) {
  let count = countChar(str, 'B');
  return count;
}

function countChar(str, ltr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ltr) count++;
  }
  return count;
}

// Test
var tests = [
    testMin,
    testIsEven
]

function test() {
    tests.forEach(function(test) {
        console.log('>>> ' + test.name)
        try {
            test()
            console.log('OK');
        } catch (e) {
            console.log(e.toString());
            console.log('Fail');
        }
        console.log('')
    })
};

test();
