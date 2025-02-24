class Animal {
    speak() {
      console.log("This animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("The dog barks.");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("The cat meows.");
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  
  animals.forEach(animal => animal.speak());
  