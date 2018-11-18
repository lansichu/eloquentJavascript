# Ways to manipulate arrays
// Adding, taking from the end of an array
let sequence = [1, 2, 3]
sequence.push(4)
sequence.push(5)
console.log(sequence) // [1, 2, 3, 4, 5]
sequence.pop()
console.log(sequence) // [1, 2, 3, 4]

// Adding, taking from the start of an array
let todoList = [1, 2, 3];
todoList.push(4);
console.log(todoList); // [1, 2, 3, 4]
todoList.shift();
console.log(todoList); // [2, 3, 4]
todoList.unshift(7);
console.log(todoList); // [7, 2, 3, 4]

# Look for items in an array
console.log([1, 2, 3, 4, 2, 1].indexOf(2)); // 1
console.log([1, 2, 3, 4, 2, 1].lastIndexOf(2)); // 4
console.log([1, 2, 3, 4, 2, 1].indexOf(7)); // -1
// Both these methods can take an optional second argument that indicates where to start looking

# Slice - takes an inclusive start index and exclusive end index and copies the elements in between
console.log([0, 2, 3, 4, 5, 7].slice(2, 4)) // [3, 4]
console.log([0, 2, 3, 4, 5, 7].slice(2)) // [3, 4, 5, 7] when an end index is not present, it goes to the end
console.log([0, 2, 3, 4, 5, 7].slice()) // [0, 2, 3, 4, 5, 7] when nothing is present, it copies the entire array

# Creating `Remove` function from slice() and concat()
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

# trim() - removes whitespaces

# padStart(lengthOfString, whatToPadWith)

# split(), join(), repeat(#)

# Rest parameter (...) AKA spread

#Objects
delete anObject.left // deletes the property from that object

"left" in anObject // informs you whether that property is in the object

anObject.keys // returns the properties that object has

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4} // copies all properties from one object into another

#JS for-loops
for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    console.log(`${entry.events.length} events`);
}
===>
for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events`);
}
