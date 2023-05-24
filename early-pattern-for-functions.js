function zxTest(z, x) {
    if (z <= 10 || x <= 10) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(z) + Math.sqrt(x), 2));
}

zxTest(10,10);

console.log(zxTest(10,10));

/*
function validateEmail(email) {
    if (typeof email !== 'string' || email.length === 0) {
        return false;
    }

    if (!email.inclues('@')) {
        return false; 
    }

    const [localPart, domain] = email.split('@');

    if (localPart.length === 0 || domain.length === 0) {
        return false;
    }

    if (!domain.includes('.')) {
        return false; 
    }

    return true;
}

// console.log(validateEmail('john.doe@example.com')); // true
console.log(validateEmail('invalid-email')); // false
console.log(validateEmail('example.com')); // false
console.log(validateEmail('john.doe@')); //false
*/