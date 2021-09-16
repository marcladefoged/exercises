"use strict";
console.log("jserloaded");

const fullname = "Marc Ladefoged Jensen";
const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

let firstname = fullname.substring(0, firstSpace);
let middlename = fullname.substring(firstSpace+1, lastSpace);
let lastname = fullname.substring(lastSpace+1);

console.log(`His first name is ${firstname}`);
console.log(`His middlename is ${middlename}`);
console.log(`His last name is ${lastname}`);

