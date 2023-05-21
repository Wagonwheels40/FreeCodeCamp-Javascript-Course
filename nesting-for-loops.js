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
/*
const myStock = {
    "category_1": {
      "item_1": {
        "name": "Soil",
        "price": 10
      },
      "item_2": {
        "name": "Fertilizer",
        "price": 15
      }
    },
    "category_2": {
      "item_3": {
        "name": "Banksia",
        "price": 20
      },
      "item_4": {
        "name": "Fern Tree",
        "price": 30
      }
    },
    "category_3": {
      "item_5": {
        "name": "Lilly",
        "price": 15
      },
      "item_6": {
        "name": "Roses",
        "price": 30
      }
    }
  };
  
  console.log(myStock.category_2.item_3.name);
  console.log(myStock.category_3.item_6.price);
  */