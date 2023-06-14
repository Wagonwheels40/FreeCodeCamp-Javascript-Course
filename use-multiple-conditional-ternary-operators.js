function age(num) {
    return (num < 16) ? "You are too young to drive" :
            (num >= 16 && num <= 17) ? "You can learn how to drive" :
            (num > 17) ? "You can get your licence" :
            "You should have your licence, or work on getting your licence";
}

console.log(age(5));