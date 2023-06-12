function groundhogDay(hours, repeatedDay) {
  if (hours < 1) {
      return [];
  } else {
      var numbers = groundhogDay(hours - 1, repeatedDay);
      numbers.push(hours);
      return numbers;
  }
}

console.log(groundhogDay(24, 1));