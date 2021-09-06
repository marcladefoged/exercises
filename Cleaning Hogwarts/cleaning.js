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


// cleaning house

student.house = jsonObject.house.trim();

student.house = student.house.substring(0, 1).toUpperCase() + student.house.substring(1).toLowerCase();
student.house = student.house.trim();


console.log(student);
studentArr.push(student);
    });

    console.log(studentArr);
    }

    