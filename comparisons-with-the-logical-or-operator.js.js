function projectsToComplete(num) {
    if (num < 5 || num > 10) {
        return "Do more projects!";
    }
    
    return "Start applying for jobs";
}

// Change this value to test
console.log(projectsToComplete(4));

/*
function temperature(celcius) {
    // Only change code below this line

    if (celcius < 30 || celcius > 35) {
        return "Go to the Beach";
    }

    // Only change code above this line
    return "Stay inside";
}

// Change this value to test
console.log("Oh, man. Look at the weather.  Let's " + temperature(30));
*/