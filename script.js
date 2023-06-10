"use strict";

//!ALL REQUIRED ELEMENT
const score0El = (document.querySelector("#score--0").textContent = 0);
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.querySelector("current--1");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
//
diceEl.classList.add("hidden");
let currentScore = 0;
//
const displayDice = function () {
  //* Generating a rendom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //*Display a dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`; //!IMP

  //*Check if the dice rool is 1 ,if one chang the palyer to next
  if (dice != 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //*next player turn
  }
};

btnRoll.addEventListener("click", displayDice); //!Cant use displayDice() beacause it willimmediately invoke the function but we need after event listener
