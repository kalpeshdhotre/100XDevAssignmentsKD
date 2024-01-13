class Laptop {
   constructor(brand, model, UseagePurpose) {
      this.brand = brand;
      this.model = model;
      this.UseagePurpose = UseagePurpose;
   }
   static typeOfGadget() {
      console.log("This is Personal Computer");
   }
   displayConfig() {
      console.log(`Brand is ${this.brand} and model is ${this.model} and it can be use for ${this.UseagePurpose}`);
   }
}

let inspiron3511 = new Laptop("Dell", "Core i5", "Video Editing");

inspiron3511.displayConfig();

Laptop.typeOfGadget();
