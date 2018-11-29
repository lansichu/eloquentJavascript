// ------------------- A Vector Type

class Vec {
  constructor(x, y) {
  	this.x = x;
  	this.y = y;
  }

  plus(otherVec) {
  	return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


// ------------------- Dominate Writing Direction

class Group {
  constructor() {
    this.set = [];
  }

  add(num) {
    if (!this.has(num)) {
      this.set.push(num);
    }
  }

  delete(num) {
    if (this.has(num)) {
      this.set = this.set.filter(n => n !== num);
    }
  }

  has(num) {
    return this.set.includes(num);
  }

  static from(array) {
    let group = new Group;
    for (let i of array) {
      group.add(i);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log('GROUP', group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// ------------------- Iterable Groups

class Group {
  constructor() {
    this.members = [];
  }

  add(num) {
    if (!this.has(num)) this.members.push(num);
  }

  delete(num) {
    if (this.has(num)) this.members = this.members.filter(n => n !== num);
  }

  has(num) {
    return this.members.includes(num);
  }

  static from(obj) {
    let group = new Group();
    for (let i of obj) {
      group.add(i);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let value = {value: this.group.members[this.position],
                   done: false};
      this.position++;
      return value;
    }

  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c


// ------------------- Borrowing a Method

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
