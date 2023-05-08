let goals = 1;
let message = showScore(goals);
console.log(message);

function showScore(goals) {
    if (goals > 4) {
        return "you're getting thumped!";
    }
    else if (goals > 3) {
        return "this isn't a great score";
    }
    else if (goals > 1) {
        return "you're still in it!"
    }
    else {
        return "You're either winning or it's a draw";
    }};