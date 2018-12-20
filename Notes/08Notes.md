# Strict mode
- JS can be a bit more strict through using `"use strict"`
- If you accidentally calla method of constructor incorrectly, JS will produce an error as soon as it tries to read something from `this`, rather than happily writing to the global scope
    - Otherwise, without `"use strict"`, JS will create a global scope object

# Tests
- Build and run collections of tests (test suites)

# Try... Catch... Finally
- debugger capabilities of browser (breakpoints)
- another way to set a breakpoint is to include a `debugger` statement
- programs often need to actively do something in response to an unanticipated situation
- throwing an exception is like a super-charged return from a function; it unwinds the stack to the first call that started the current execution (or where it is caught)
- Instances of the Error constructor also gather information about the call stack that existed when the exception was created (stack trace)
- `try` statements have a `finally` feature - no matter what happens, run this code after trying to run the code in the `try` block

# Selective Catching
- When an exception makes it all the way to the bottom of the stack without being caught, it's handled by the environment
    - Browsers will probably write a description of it to the JS console
    - Node.js is more careful about data corruption: it aborts the whole process when an unhandled exception occurs
- Don't blanket catch exceptions unless it is for the purpose of "routing" them somewhere

# Assertions
- Checks inside a program that verify that something is the way it's supposed to be
- Used to find programmer mistakes
