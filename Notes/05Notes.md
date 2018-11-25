Higher-order functions - functions that operate on other functions (taking them as arguments of by returning them)
- allows us to abstract over actions, not just values
- can have functions that change other functions
function noisy(g) {
  return (...args) => {
    console.log("calling with", args);
    let result = g(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1, -1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

There is a built-in array method, forEach, that provides something like a for/of loop as a HOF:
["a", "b"].forEach(l => console.log(l));
// → A
// → B

#Filtering arrays
function filter(test, array) {
    let passedTest = [];
    for (let element of array) {
        if (test(element)) {
            passedTest.push(element);
        }
    }
    return passedTest;
}

// console.log(script => script.living, SCRIPTS)

Filter is a standard method therefore it does not need to be defined.
==> console.log(SCRIPTS.filter(s => s.direct == "tbb"));

# Map
The `map` method transforms an array by applying a function to all of its elements and building a new array from returned values --> same length as original array but modified content

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl")
// map is also a standard function
console.log(rtlScripts.map(s => s.name));

# Summarizing with reduce(array, combining_function, start_value)

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(element, current);
    }
    return current;
}
`Start` argument is optional if your array contains at least one element


# some
This HOF takes a test function and returns true or false for any of the elements in the array (like the || operator)
# every
Analogous to `some`, there's an `every` method. This method returns true if all the elements in the array is true based on some test (like the && operator)

# charCodeAt() gives you a code unit, not a full character code
# codePointAt() gives a full Unicode character
# findIndex is like indexOf but instead of looking for a specific value, it finds the first value for which then given function return true. Like indexOf, it returns -1 when no such element is found
