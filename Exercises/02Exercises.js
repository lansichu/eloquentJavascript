var assert = require('assert')

// ------------------- Looping a Triangle

/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
// Hard to test because it's not callable
// Node - assert

for (let i = 0; i < 7; i++) {
  let print = '';
  for (let j = 0; j <= i; j++) {
    print += '#';
  }
  console.log(print);
}

// ------------------- FizzBuzz

/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// Oli's idea for side-effect in tests:

function olisThing(s, log=console.log) {}
    log(s);
}

function testOlisThing() {
    var spy = sinon.spy()  // This is a library for spys/mocks
    olisThing('oli', spy)  // Pass in the spy, probably nothing happens
    assert.True(spy.calledWith('oli')
}

// ------------------- Chessboard

/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
*/

let chessboard = '';
for (let j = 0; j < 8; j++) {
  if (j % 2 == 0) {
    chessboard += '# # # # \n'
  } else {
    chessboard += ' # # # #\n'
  }
}
console.log(chessboard);
