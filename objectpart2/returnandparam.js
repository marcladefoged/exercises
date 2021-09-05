"use strict";

myFunction("Robert", "Klaus");

function myFunction(nameStr1,nameStr2) {
    console.log("myFunction", nameStr1);
    console.log("myFunction", nameStr2);
}


let fullNameStr = "Marc Ladefoged Jensen";
let firstName = getFirstName(fullNameStr);
console.log(`My first name is ${firstName}`);

function getFirstName(fullName) {
    const returnVal = fullName.substring(0,fullName.indexOf(" "))
    return returnVal;
}