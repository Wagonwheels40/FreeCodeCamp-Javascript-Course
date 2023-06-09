function hoursOfSleep(val) {
    if (val >= 7 && val <= 8) {  
      return "You've had enough sleep";
    }
  
    if (val <= 5) {  
      return "You will have to take a nap after work";
    }
  
    return "You've had too much sleep";
  }
  
  hoursOfSleep(10);

  console.log(hoursOfSleep(10));