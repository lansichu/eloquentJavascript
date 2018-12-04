// ------------------- Measuring a Robot

function countSteps(village, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (village.parcels.length == 0) return turn;
    let action = robot(village, memory);
    village = village.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let steps1 = 0, steps2 = 0;
  for (let i = 0; i < 100; i++) {
    let village = VillageState.random();
    steps1 += countSteps(village, robot1, memory1);
    steps2 += countSteps(village, robot2, memory2);
  }
  console.log(`Robot1 needs ${steps1/100} on average while Robot2 needs ${steps2/100} on average`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

// ------------------- Persistent Group

class PGroup {
  constructor(members) {
    this.instance = members;
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.instance.concat(value));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.instance.filter(n => n != value));
  }

  has(value) {
    return this.instance.includes(value);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
