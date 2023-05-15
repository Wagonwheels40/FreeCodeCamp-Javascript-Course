// Size of multiplcation table
const tableSize = 12;

for (let i = 1; i <= tableSize; i++) {
    for (let j = 1; j <= tableSize; j++) {
        // Calculate the product
        const product = i * j;

        // the equation and product
        console.log(`${i} * ${j} = ${product}`);
    }

    // separator after each row
    console.log('-'.repeat(10));
}