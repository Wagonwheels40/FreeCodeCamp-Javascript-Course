const myBooks = [
    {
        genre: "fiction",
        list: [
            "The Idiot",
            "The Pale King",
            "Gravity's Rainbow"
        ]
    },
    {
        genre: "non-fiction",
        list: [
            "A History of Japan",
            "Australian History for Dummies",
            "Europe - on a shoestring"
        ]
    }
];

console.log(myBooks[0].list[1]); // Access the second book in the fiction genre
console.log(myBooks[1].list[1]); // Access the first book in the non-fiction genre

/*
const employees = [
    {
        id: 1,
        name: "John Doe",
        position: "Manager"
    },
    {
        id: 2,
        name: "Jane Smoth",
        position: "Developer"
    },
    {
        id: 3,
        name: "Bob Johnson",
        position: "Designer"
    }
];

console.log(employees[0].name);
console.log(employees[1].position);
console.log(employees[2].id);
*/ 