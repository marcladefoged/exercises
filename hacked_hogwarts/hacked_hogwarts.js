"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("ready");
    loadJSON();
}

const studentArr = [];

const studenttemplate = {
firstname: "",
lastname: "",
middlename: "",
nickname: "",
image: "",
house: "",
};

function loadJSON() {
    fetch("https://petlatkea.dk/2021/hogwarts/students.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
        console.table();
    });

}

function prepareObjects(jsonData) {

    jsonData.forEach((jsonObject) => {

let student = {};
student = {studenttemplate};

// cleaning first name

student.firstname = jsonObject.fullname.trim();

let namearray = student.firstname.split(" ");
student.firstname = namearray[0];

student.firstname = student.firstname.substring(0, 1).toUpperCase() + student.firstname.substring(1).toLowerCase();


// cleaning last name

student.lastname = namearray[namearray.length - 1];


// cleaning middle name

student.middlename = namearray[1];


if(student.middlename === student.lastname) {
    student.middlename = null;
}

student.lastname = student.lastname.substring(0, 1).toUpperCase() + student.lastname.substring(1).toLowerCase();
// student.lastname = student.lastname.trim();

// cleaning nick name


// adding images

let imagefirst = student.firstname.substring(0, 1);
let imagelast = student.lastname;

student.image = (`images/${imagelast}` + `_` + `${imagefirst}.png`).toLowerCase();


// cleaning house

student.house = jsonObject.house.trim();

student.house = student.house.substring(0, 1).toUpperCase() + student.house.substring(1).toLowerCase();
student.house = student.house.trim();


console.log(student);
studentArr.push(student);
    });

    console.log(studentArr);
    }

    

/* // DISPLAY CONTENT

function displayList(students) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    students.forEach( displayStudent );
}

function displayStudent( student ) {
    // create clone
    const clone = document.querySelector("template#studentlist").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=firstname]").textContent = student.firstname;
    clone.querySelector("[data-field=middlename]").textContent = student.middlename;
    clone.querySelector("[data-field=lastname]").textContent = student.lastname;
    clone.querySelector("[data-field=house]").textContent = student.house;

    clone.querySelector("studentArr").textContent = studentArr.firstname;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
} */