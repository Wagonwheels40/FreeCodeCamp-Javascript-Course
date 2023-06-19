function standInLine(arr, item) {
    arr.push(item);
    return arr.shift();
  }
  
  var testArr = [1, 2, 3, 4, 5];
  
  console.log("Initial array: " + JSON.stringify(queue)); // Display initial array
  
  console.log("First item removed: " + nextInLine(queue, 6)); // Remove the first item and display it
  
  console.log("Updated array: " + JSON.stringify(queue)); // Display updated array