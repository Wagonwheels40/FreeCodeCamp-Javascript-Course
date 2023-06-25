function myLocalScope() {
    'use strict';
    var myVar = {three: "three"}
    console.log(myVar);
}
myLocalScope();

var last_name;

function myName() {
    last_name = "Asimov";
    var first_name = "Isaac";
    console.log(`${first_name} ${last_name}`);
}

myName();

console.log("last_name => ", last_name);