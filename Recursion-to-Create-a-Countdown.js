function daysUntilVietnam(n) {
    if (n < 1) {
        console.log("It's your lucky day!  You and your wife are going to Vietnam!");
    } else {
        console.log(n);
        daysUntilVietnam(n - 1);
    }
}

daysUntilVietnam(120);