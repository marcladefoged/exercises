document.addEventListener("DOMContentLoaded", start);

function start() {
    fetch("object_parts.json")
    .then((response) => response.json())
    .then ((data) => convertJSONData(data));
}

function convertJSONData(jsonDATA) {
    jsonDATA.forEach((elm) => {
console.log("ELM", elm);
const student = Object.create(Student);
student.firstName = "The Name I've Entered";

    })
}

console.log("arrayOfStudentObjects", arrayOfStudentObjects);


function getFirstName(fullname) {
    //console.log("getFirstName", fullName);
    return fullname.substring(0, fullname.indexOf(" "));
}