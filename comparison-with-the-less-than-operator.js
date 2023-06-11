function gameOfFutsal(val) {
    if (val < 2) {
        return "close score"
    }

    if (val < 5) {
        return "good game"
    }

    return "You lose!"
}

console.log(gameOfFutsal(6));