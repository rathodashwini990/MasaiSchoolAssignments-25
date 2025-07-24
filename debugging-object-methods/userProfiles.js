const userProfile = {
  name: "Alice",
  age: 28,

  // Method to return user details
  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  // Method to update age
  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }

    this.age = newAge;
    console.log(this.details());
  }
};

// Method call to update age and log details
userProfile.updateAge(30);

// Final details log
console.log(userProfile.details());