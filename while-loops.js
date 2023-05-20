const pagesPerDay = [];
let i = 0;

while (i < 6) {
    pagesPerDay.push(i);
    if (i === 5) {
        console.log("You've read 5 pages today");
    } else {
        console.log(i);
    }
    i++;
}

/*
const pagesPerDay = [];
// To keep track of the number of pages read each day, we create an empty list called pagesPerDay.
const numberOfDays = 30;
// The variable numberOfDays is set to 30, which represents the total number of days we want to simulate.
let totalPageCount = 0;
// We create a variable called totalPageCount and set it to 0. This variable will store the total number of pages read over the 30 days.
let i = 0;
// We also create a variable called i and set it to 0. This variable will be used to keep track of the current day as we go through the loop.

while (i < numberOfDays) {
// The while loop will run as long as the value of i is less than numberOfDays (30 in this case).
    const pagesRead = Math.floor(Math.random() * 5) + 1; // Generate random number between 1 and 5 pages a day
// Inside the loop, we generate a random number between 1 and 10 using a mathematical function. This random number represents the number of pages read on the current day.
    totalPageCount += pagesRead;
// We add the number of pages read on the current day to the totalPageCount variable, updating the cumulative count.
    pagesPerDay.push(pagesRead);
// We also add the number of pages read on the current day to the pagesPerDay list, so we can keep track of the number of pages read each day.
    i++;
// After processing the current day, we increment the value of i by 1 to move to the next day.
// The loop continues until we have processed all 30 days.
// Finally, we output the total number of pages read over the 30 days using console.log(), as well as the list of pages read each day.
}

console.log(`Total pages read in ${numberOfDays} days: ${totalPageCount}`);
console.log(pagesPerDay);
*/