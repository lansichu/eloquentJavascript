# Regular Expressions - way of describing patterns in string data
- A type of object
- Can be either constructed with the `RegExp` constructor or a literal value enclosed by forward slashes
let reg1 = new RegExp("abc");
let reg2 = /abc/;
- backslashes that aren't part of special character codes (like `\n`) will be preserved and change the meaning of the pattern
- ? and + have special meaning too in regular expression and must be preceded by a backslash if they are meant to represent the character itself

# Testing for Matches
- RegExp has a number of methods, such as `test`
- `test` will return a boolean stating weather the string contains a match of the pattern in the expression
```
console.log(/ab/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false
```
- If 'abc' occurs anywhere in the string we are testing against, `test` will return `true`

# Set of Characters
- Finding if a string contains a substring can be done with a call to `indexOf`
- Put a set of characters in square brackets makes that part of the expression match any of the characters between the brackets
```
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true
```
- within [], hyphen between two characters indicates a range of characters, where the ordering is determined by the character's Unicode number
- a number of common character groups have their own built-in shortcuts:

\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline

- To invert a set of characters, you can write a caret (^) character after the opening bracket

# Repeating Parts of a Pattern
- When you put a plus sign (+) after something in regex ==> the element may be repeated more than once
    - /\d+/ matches one or more digit characters
    - the star `*` has similar meaning but also allows for match zero times
- Question mark `?` makes a part of a pattern options - it could match zero or one time
```
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true
```
- To indicate that a pattern should occur a precise number of times, use braces
```
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true
```
- Can also specify open-ended ranges when using braces --> {5,} (5 or more times)

# Grouping Subexpressions
- To use `+` or `*` on more than one element at a time, you need to use parentheses
```
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true
```
- The `i` at the end makes the regex case insensitive

# Matches and Groups
- Regex also has an `exec` method that will return `null` if no match was found and return an object with information about the match otherwise
```
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8
```
- String values have a method similar:
```
console.log("one two 100".match(/\d+/));
// → ["100"]
```
