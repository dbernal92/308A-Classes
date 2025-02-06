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
    class Animal {
      constructor(eyes, legs, isAwake, isMoving) {
          //obj.eyes = eyes
          this.eyes = eyes;
          this.legs = legs;
          this.isAwake = isAwake;
          this.isMoving = isMoving;
      }
    }
  
  // Instance of a class
  // console.log(animal1);
  
  const animals = [];
  
  for (let i = 0; i < 100; i++) {
      const animal1 = new Animal(2, 4, true, false);
      animals.push(animal1)
  }
  
  console.log(animals);