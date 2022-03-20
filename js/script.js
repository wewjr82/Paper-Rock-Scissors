"use strict";

var computerChoiceDisplay = document.getElementById("computer_choice");
var userChoiceDisplay = document.getElementById("user_choice");
var resultDisplay = document.getElementById("result");
var possibleChoices = document.querySelectorAll("button");
var userChoice;
var computerChoice;
var result;

possibleChoices.forEach(function (possibleChoice) {
  return possibleChoice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

var generateComputerChoice = function generateComputerChoice() {
  var randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
};

var getResult = function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lost";
  }

  resultDisplay.innerHTML = result;
};
