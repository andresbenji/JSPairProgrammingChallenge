let car = {
  make: "Nissan",
  model: "Silvia",
  year: 1989,
  mileage: 1500,
  color: "black",
  driveToWork() {
    const oldMilage = this.mileage; // created a variable oldMileage and set it as 2000
    this.mileage += 33; // added 33 miles to the original 2000 miles
    console.log(`old mileage: ${oldMilage}| new mileage: ${this.mileage}`); // logged the old mileage which is 2000 and the new updated mileage which is 2033
  },
  driveAroundTheWorld() {
    const oldMilage = this.mileage; // created another variable oldMileage set to the previous updated mileage that was used in driveToWork
    this.mileage += 24000; // adds 2400 miles to 2033
    console.log(`old mileage: ${oldMilage} |  new mileage: ${this.mileage}`); //logs old and new mileage
  },
  runErrands() {
    const oldMilage = this.mileage; //created another variable oldMileage set to the previous updated mileage that was used in driveAroundTheWorld
    this.mileage += 30; //adds 30 miles to the 26033
    console.log(`old mileage: ${oldMilage} | new mileage: ${this.mileage}`);
  },
};
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();
