function youArePlaying(val) {
    var answer = "empty string";
  
    switch (val) {
        case "1":
            answer = "Counter Strike";
            break;
        case "2":
            answer = "Pathologic";
            break;
        case "3":
            answer = "FallOut 4";
            break;
        default:
            answer = "You are playing a video game";
            break;
      }
  
      // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  youArePlaying(1);
  
  console.log(youArePlaying('fa'));
  

  /*
function choiceOfSauce(val) {
    var sauce = "Unkown";

    switch (val) {
        case 1:
            sauce = "Tomato";
            break;
        case 2:
            sauce = "Garlic";
            break;
        case 3:
            sauce = "Mustard";
            break;
        default:
            sauce = "Please select a sauce";
            break;
    }

    return sauce;
}

// Test cases
console.log(choiceOfSauce(1)); // Output = Tomato
  */