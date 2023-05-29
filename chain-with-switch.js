function songsBy100Gecs(val) {
    let answer = "";
    
    switch (val) {
      case 1:   
        answer = "100db";
        break;
      case 2:
        answer = "Doritos & Fritos";
        break;
      case 3:
        answer = "Money Machine";
        break;
      case 4:
        answer = "Mememe";
        break;
      case 5:
        answer = "Ate Nine";
        break;
      default:
        answer = "Not a song";
    }
    
    return answer;
  }
  
  console.log(songsBy100Gecs(1));
  
/*
function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-';
            result = num1 - num2;
            break;
        case '*';
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    return result;
}

// Example usage:
console.log(calculate(5, '+', 3)); // Output: 8
*/