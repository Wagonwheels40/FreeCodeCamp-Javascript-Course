function tierList(val) {
    var answer = "empty string";
    // Only change code below this line

    switch(val) {
        case 1:
        case 2: 
        case 3:
            answer = "Shit Tier";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid Tier";
            break;
        case 7:
        case 8:
        case 9:
            answer = "Patrician";
    }

    // Only change code above this line
    return answer;
}

// Change this value to test
tierList(1);

console.log(tierList(1));

/*
function movieInfo(movie) {
    var info = "";

    switch (movie) {
        case "Horror":
        case "Thriller":
        case "Crime":
        case "Mystery":
            info = "This movie will be suspensful!";
            break;
        case "Fantasy":
        case "Sci-Fi":
            info = "This movie will be imaginative!";
            break;
        case "Drama":
        case "Romance":
            info = "This movie will be emotive";
    }

    return info;
}

console.log(movieInfo("Horror"));
console.log(movieInfo("Fantasy"));
console.log(movieInfo("Drama"));

*/
