function goalsPerGame(array, index = 0, sum = 0) {
    if(index >= array.length) {
      return sum;
    }
    sum += array[index];
    return goalsPerGame(array, index + 1, sum);
  }
  
  const goals = [1, 2, 3];
  const sum = goalsPerGame(goals);
  console.log(sum);
  