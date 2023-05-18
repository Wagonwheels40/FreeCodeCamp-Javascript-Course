const inflation = [];

for (let i = 0; i < 10; i += 1) {
    inflation.push(i); 
        if (i === 0) {
        console.log("Since 2013, the median grocery prices have risen by...")
    } else {
        console.log(i);
        console.log("dollar");
    }
}

// another project

const oddNumbers = [];
// declares a variable named `oddNumbers` in an empty array.  The array will store off numbers in it.
for (let i = 1; i <= 10; i += 2) {
    oddNumbers.push(i);
// i is iterated to the `oddNumbers` array using push method
}

console.log("Odd Numbers: ", oddNumbers);
console.log("Sum of Odd Numbers: ", oddNumbers.reduce((sum, num) => sum + num, 0));
console.log("Product of Odd Numbers: ", oddNumbers.reduce((product, num) => product * num, 1));

