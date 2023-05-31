function londonIs(val) {
    var answer = "empty string";

    switch (val) {
        case 1:
            answer = "Red";
            break;
        case 2:
            answer = "White";
            break;
        case 3: 
            answer = "Blue";
            break;
    }

    return answer;
}

londonIs(1);

// Test cases
console.log(londonIs(3)); // Output = Blue