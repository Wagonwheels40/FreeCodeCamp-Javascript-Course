function rightOrWrong(wasThatCorrect) {
    if (wasThatCorrect) {
      return "Yes, it sure was!";
    }
  
    return "No, please try again!";
  }
  
  console.log(rightOrWrong(true));