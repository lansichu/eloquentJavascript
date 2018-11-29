# Encapsulation
- Core idea of OOP is divide programs into smaller pieces and make each piece responsible for managing its own state (kept local)
- interfaces - pieces of program that interact with each other through interfaces (public), hiding their precise implementation (private)
- JS does not have this but available interfaces are described in documentation or comments. Common practice to indicate private properties is to put an underscore at the start of the property name --> Encapsulation

- To call `this` parameter explicitly, you can use a function's `call` method - takes the `this` value as its first argument and treats further arguments as normal parameters

#_TODO_:
- Why does it mean by `you cannot refer to the `this` of the wrapping scope in a regular function defined with the function keyword`
- Arrow functions are different - they do not bind their own `this` but can see the `this` binding of the scope around them

#Prototype
- Most objects also have a prototype additional to their set of properties - used as a fallback source of properties --> `Object.prototype`
- functions derive from Function.prototype and arrays derive from Array.prototype
- You can use Object.create to create an object with a specific prototype

#Classes
- Constructor function - ensures that the instances of a class has the properties they are suppose to have from the class
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
- For JS, if you put the keyword `new` in front of a function call, the function is treated as a constructor
- Constructors are usually capitalized

# Class Notation - New after 2015
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let hungryRabbit = new Rabbit("hungry");
- Class declarations currently allow only methods (properties that hold functions); cannot save a non-function value in there`
- Can be used in both statements and expressions

# Maps
- A map (noun) us a data structure that associates values (the keys) with other values
- Even though a map not may contain any key with the value "toString", when looking for such a value, an undesirable value may be returned for it looks for it in the prototype
- To avoid this, we can create objets with no prototype by passing `null` to `Object.create`
- JS comes with a class called Map that does this and allows any type of keys. The methods `set, get, has` are part of the interface of the `Map` object`
- If you make a plain object, using `Object.keys` returns only an object's own keys, not those in the prototype
- Instead of the `in` operator, you can use the `hasOwnProperty` method - ignores the object's Prototype

# Polymorphism
- Polymorphic code can work with values of different shapes

# Symbols
- It's possible for multiple interfaces to use the same property name for different things --> could be bad
- Property names can also be symbols - unlike strings, newly created symbols are unique --> cannot create the same symbol twice
- It’s possible to include symbol properties in object expressions and classes by using square brackets around the property name

Inside a class declaration, methods that have static written before their name are stored on the constructor


# Inheritance

- Create a new class, much like the old class, but with new definitions for some of its properties —> inheritance
- The word `extends` indicates that this class shouldn’t be directly based on the default `Object` prototype but on some other class —> superclass while the derived class is the subclass


# The instanceOf Operator

- It may be useful to know whether an object was derived from a specific class —> instanceOf
