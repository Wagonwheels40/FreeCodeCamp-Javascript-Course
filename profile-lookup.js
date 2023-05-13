// Define an array of objects, where each object represents a user profile
var contacts = [  {    firstName: "John",    lastName: "Doe",    phoneNumber: "1234567890",    email: "johndoe@example.com"  },  {    firstName: "Jane",    lastName: "Smith",    phoneNumber: "0987654321",    email: "janesmith@example.com"  },  {    firstName: "Bob",    lastName: "Johnson",    phoneNumber: "5555555555",    email: "bobjohnson@example.com"  }];

// Define a function that takes in a first name and a property name, and returns the value of that property
function lookupProfile(firstName, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
      if (contacts[i][prop]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Example usage
console.log(lookupProfile("John", "phoneNumber")); // Output: "1234567890"
console.log(lookupProfile("Jane", "email")); // Output: "janesmith@example.com"
console.log(lookupProfile("Bob", "address")); // Output: "No such property"
console.log(lookupProfile("Alice", "phoneNumber")); // Output: "No such contact"
