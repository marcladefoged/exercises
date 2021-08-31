"use strict";

let text;
document.querySelector("#input").addEventListener("input", readInput)
document.querySelector("#generate").addEventListener("click", writeOutput)

function readInput(){

    text = this.value;
    console.log("reading input " + text);

}

function readOutputChoice(){
    let choice = document.querySelector("#dropdown").value
    console.log("your choice: " + choice);
    if (choice === "0"){
        text = text.substring(0,1).toLocaleUpperCase() + text.substring(1).toLocaleLowerCase();
        console.log("text from choice 0: " + text)
    }
    if (choice === "1"){
        text = text.substring(0, text.indexOf(" "));
        console.log("text from choice 1: " + text)
    }
    if (choice === "2"){
        text = text.indexOf(" ");
        console.log("text from choice 2: " + text)
    }
    if (choice === "3"){
        
        let position;
        position = "position of middle name: " + parseInt(text.indexOf(' ')+ 1)  + "/" + text.lastIndexOf(" ") + "\nMiddle Name: " + text.split(" ")[1];
        console.log("text from choice 3: " + text)
        text = position
    }


if (choice === "4"){
        if(text.endsWith(".jpg")){
            text = `true`;
        }
        if(text.endsWith(".png")){
            text = `true`;
        }else{
            text = `false`;
        }
      
    }
        

}

function writeOutput(){
    readOutputChoice();
    console.log("output text: " + text);
    document.querySelector("#output").textContent = text;
}