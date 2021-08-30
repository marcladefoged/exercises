"use strict";
console.log("jserloaded");

const fullname = "Marc Ladefoged Jensen";
const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

let firstname = fullname.substring(0, firstSpace).trim();
let middlename = fullname.substring(firstSpace, lastSpace).trim();
let lastname = fullname.substring(lastSpace).trim();



console.log(`His first name is ${firstname}`);
console.log(`His middlename is ${middlename}`);
console.log(`His last name is ${lastname}`);

