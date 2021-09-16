"use strict";

let playerHand = "unknown";
let computerHand = "unknown";
let signs = ["rock", "paper", "scissors"];
let randomNumber = 0;

// funktion der henter computerens hånd

function getComputerHand() {
    randomNumber = Math.floor(Math.random()*2);
    console.log("det tilfælde tal er " + randomNumber);
    document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors");

// giver random nummer til array som en position = class
    document.querySelector("#player2").classList.add(signs[randomNumber]);

// computerens valgte tegn ud fra random nummer

if(randomNumber == 0) {
    computerHand = "rock";
    console.log("computeren vælger sten!")
}

if(randomNumber == 1) {
    computerHand = "paper";
    console.log("computeren vælger papir!")
}

if(randomNumber == 2) {
    computerHand = "scissors";
    console.log("computeren vælger saks!")
}
};

const button = document.querySelectorAll("button");
button.forEach((tryk) => {
tryk.addEventListener("click", showAnimation);
})

function showAnimation() {

    clearScreen();

    getComputerHand();

    document.querySelectorAll(".player").forEach((tryk) => {
        tryk.classList.add("shake");
        tryk.addEventListener("animationend", () => {

            console.log("animationended");

            tryk.classList.remove("shake");

            determineWinner();
        });
    });

    // Find ud af hvilken knap der bliver trykket på

    console.log(this.classList);
    if(document.querySelector("rock").addEventListener(click)) {
        
        console.log("du valgte papir!");
        document.querySelector("#player1").classList.remove("rock");
        document.querySelector("#player1").classList.remove("scissors");
        document.querySelector("#player1").classList.add("paper");
        playerHand = "paper";
    }

    console.log(this.classList);
    if(this.classList == "rock") {
        console.log("du valgte sten!");
        document.querySelector("#player1").classList.remove("paper");
        document.querySelector("#player1").classList.remove("scissors");
        document.querySelector("#player1").classList.add("rock");
        playerHand = "rock";
    }

    console.log(this.classList);
    if(this.classList == "scissors"); {
    console.log("du valgte saks!");
        document.querySelector("#player1").classList.remove("rock");
        document.querySelector("#player1").classList.remove("paper");
        document.querySelector("#player1").classList.add("scissors");
        playerHand = "scissors";
    }
}

function determineWinner() {
    if (computerHand == "rock" && playerHand == "rock") {
      console.log("we have a draw");
      // show the final screen based on a result
      showDraw();
    }
  
    if (computerHand == "rock" && playerHand == "paper") {
      console.log("player wins");
      showWin();
    }
  
    if (computerHand == "rock" && playerHand == "scissors") {
      console.log("player lose");
      showLose();
    }
  
    if (computerHand == "paper" && playerHand == "scissors") {
      console.log("player wins");
      showWin();
    }
  
    if (computerHand == "paper" && playerHand == "rock") {
      console.log("player lose");
      showLose();
    }
  
    if (computerHand == "paper" && playerHand == "paper") {
      console.log("we have a draw");
      showDraw();
    }
  
    if (computerHand == "scissors" && playerHand == "rock") {
      console.log("player wins");
      showWin();
    }
  
    if (computerHand == "scissors" && playerHand == "paper") {
      console.log("player lose");
      showLose();
    }
  
    if (computerHand == "scissors" && playerHand == "scissors") {
      console.log("we have a draw");
      showDraw();
    }
  }

  function showWin() {
    //remove all of the classes so only the right one is shown
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.remove("hidden");
  }
  
  function showLose() {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#lose").classList.remove("hidden");
  }
  
  function showDraw() {
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.remove("hidden");
  }
  
      //function for clearing all of the final screens before start of the upcoming rounds
  function clearScreen() {
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
  }


 

 // button function

 // skærmen bliver clearet for win/lose/draw fra den forgangne runde (if there was any)

 // tilføj ryste animation

  // Fjern ryste animation så den kan blive tilføjet igen i næste runde

  // efter endt animation skal determine winner funktionen køre

  

  // sammenlign computerhånd og spillerhånd for at finde en vinder

  // Fjern alle classes så kun den rigtige bliver vist

  // funktion der fjerner alt før næste runde startes

 

