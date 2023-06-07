function medication(age) {
    // Only change code below this line

    if (age <= 35 && age >= 6) {
        return "You are allowed to take stimulant medication";
    }

    // Only change code above this line
    return "Seek your health care professional for other medication";
}

// Change this value to test

console.log(medication(36));

/*
function codingNoob(years) {
    if (years < 3 && years > 2) {
        return "apply for a junior position";
    }

    return "you either need to keep studying or look for an internship";
}

console.log("You've been studying for that long? Ok, " + codingNoob(1))
*/