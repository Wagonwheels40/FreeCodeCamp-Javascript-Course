function iqTests(iq) {
    if (iq < 90) {
        return "Below Average";
    } else if (iq >= 90 && iq < 110) {
        return "Average";
    } else if (iq >= 110 && iq < 130) {
        return "Above Average";
    } else if (iq >= 130 && iq < 145) {
        return "High Intelligence";
    } else if (iq >= 145) {
        return "Very High Intelligence";
    }
}

console.log("Your IQ is classified as: " + iqTests(150));

/*
function universityExamScores(score) {
    if (score >= 90) {
        return "High Distinction";
    } else if (score >= 80) {
        return "Distinction";
    } else if (score >= 70) {
        return "Credit";
    } else if (score >= 55) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function displayScores(name, score, year) {
    const grade = universityExamScores(score);
    console.log(`${name}'s score: ${score}`);
    console.log(`${name}'s grade: ${grade}`);
    console.log(`${name}'s year: ${year}`);
}

displayScores("Georgia", 97, "1st year");
displayScores("Bill", 55, "2nd year");

*/