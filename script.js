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
  
  const animals = [];
  
  for (let i = 0; i < 100; i++) {
      const animal1 = new Animal(2, 4, true, false);
      animals.push(animal1)
  }
  
  console.log(animals);

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