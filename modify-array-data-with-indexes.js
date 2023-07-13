var ourArray = [18,64,99];
ourArray[1] = 45;

var myArray = [18,64,99];

console.log(myArray, "<= my Array pre modification");

myArray[0] = 45;

console.log(myArray, "<= my Array post modification");

// Put into context //

var pointsNeededForTopFour = [70, 85, 100];

console.log(pointsNeededForTopFour, "<= my Array pre modification");

pointsNeededForTopFour[0] = 75;

console.log(pointsNeededForTopFour, "<= my Array post modification");