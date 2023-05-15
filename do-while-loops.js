const prompt = require('prompt-sync')();

let newPassword;
let strength = 0;

do {
  newPassword = prompt("Enter a new password:");

  // Check the strength of the password using some criteria
  if (newPassword.length >= 8) {
    strength++;
  }
  if (newPassword.match(/[a-z]/)) {
    strength++;
  }
  if (newPassword.match(/[A-Z]/)) {
    strength++;
  }
  if (newPassword.match(/[0-9]/)) {
    strength++;
  }

} while (strength < 3);

console.log("Your password has been changed successfully!");

// This needs adjusting