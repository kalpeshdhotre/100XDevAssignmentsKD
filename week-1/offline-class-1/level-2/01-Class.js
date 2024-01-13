class Animal {
   constructor(name, legCount) {
      this.name = name;
      this.legCount = legCount;
   }
   static mytype() {
      console.log("I am animal");
      
   }
   describe() {
      return `${this.name} has ${this.legCount} legs`;
   }
}

let dog = new Animal("Rocky", 4);
console.log(dog.describe());
console.log(dog.mytype());
