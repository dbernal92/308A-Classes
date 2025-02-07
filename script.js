const person = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040
  },
  occupation: 'Front-End Developer'
}

const person2 = {
  name: {
    first: 'Elyan2',
    last: 'Kemble2',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040
  },
  occupation: 'Front-End Developer'
}


function introduce() {
  console.log(this);

  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
}


person.introduce = introduce
person2.introduce = introduce
introduce()

console.log(person);

person.introduce()
person2.introduce()

console.log("=========================");

// Class Definition
// class Animal {
//   constructor(eyes, legs, isAwake, isMoving) {
//       //obj.eyes = eyes
//       this.eyes = eyes;
//       this.legs = legs;
//       this.isAwake = isAwake;
//       this.isMoving = isMoving;
//   }
// }

// Instance of a class
// console.log(animal1);

// const animals = [];

// for (let i = 0; i < 100; i++) {
//     const animal1 = new Animal(2, 4, true, false);
//     animals.push(animal1)
// }

// console.log(animals);

// Class Definition
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    //obj.eyes = eyes
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }

  toString() {
    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

// Instance of a class
const cat1 = new Animal(2, 4, true, false);
console.log(cat1.eyes);

const cat2 = new Animal(2, 4, false, false);
console.log(cat2.legs);

const dog1 = new Animal(2, 4, true, true);
dog1.speak("huh");

const cow1 = new Animal(2, 4, true, false);
cow1.sit();
cow1.sleep()
console.log(cow1);


console.log(cat1.toString());
console.log(cat1);

console.log("======================================");

class Human extends Animal {
  constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state, zip) {
    super(2, 2, isAwake, isMoving);
    this.hair = hair;
    this.name = {
      first,
      last
    };
    this.age = age;
    this.occupation = occupation;
    this.location = {
      city,
      state,
      zip
    }
  }

  introduce() {
    console.log(`"Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!"`);
  }
}


const person1 = new Human(true, true, "Black", "Paul", "Walker", 30, "Mechanic", "San Francisco", "CA", 10033)

console.log(person1);
person1.introduce();

class Developer extends Human {
  constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state, zip, programmingLanguage) {
    super(isAwake, isMoving, hair, first, last, age, occupation, city, state, zip)
    this.programmingLanguage = programmingLanguage;
  }

  skill() {
    console.log(`${this.name.first} has many programming language skills, but is most proficient in ${this.programmingLanguage}.`)
  }
}

const newHire = new Developer(true, true, "auburn", "Jordan", "Johnson", "32", "developer", "Brooklyn", "NY", "11219", "JavaScript");

newHire.introduce();
newHire.skill();

class FrontEndDeveloper extends Developer {
  constructor(isAwake, isMoving, hair, first, last, age, city, state, zip, programmingLanguage, expYears, designTool, framework) {
    super(isAwake, isMoving, hair, first, last, age, "Front-End Developer", city, state, zip, programmingLanguage)
    this.expYears = expYears;
    this.designTool = designTool;
    this.framework = framework;
  }

  job() {
    console.log(`"I have ${this.expYears} of experience using ${this.framework}. I prefer designing with ${this.designTool} mostly."`)
  }
}

const newHire1 = new FrontEndDeveloper(true, true, "brown", "Terry", "Timm", "34", "Brooklyn", "NY", "11227", "TypeScript", "7", "Figma", "React");

newHire1.introduce();
newHire1.skill();
newHire1.job();

cat1.eyes = "yellow";
console.log(cat1);

class Learner {
  // Private properties
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  get name() {
    return this.#name.first + " " + this.#name.last;
  }

  get age() {
    return this.#age;
  }

  set grades(grade) {
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }

  }

  get grades() {
    return this.#grades;
  }
}

const learner1 = new Learner('Leroy', 'Jenkins', 18);

// We can't override private properties
learner1.name = "paul";
learner1.age = 847;

// (Setters) Setting a new grade
learner1.grades = 80;
learner1.grades = 100;
learner1.grades = 70;

// (Getters) Read the private properties
console.log(learner1.name);
console.log(learner1.age);
console.log(learner1.grades);