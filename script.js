"use strict";

//!ALL REQUIRED ELEMENT
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
//console.log(btnHold);
// scores
let currentScore, scores, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; //*We start with active palayer as player 0
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
//

const switchPlayer = function () {
  //*next player turn
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //*If active player is 0 next palyer will be 1 and if active player is 1 next palyer will be 0
  currentScore = 0;
  player0El.classList.toggle("player--active"); // *Will toggle player color after 1 getting encountered
  player1El.classList.toggle("player--active");
};
const displayDice = function () {
  if (playing) {
    //* Generating a rendom dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //*Display a dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`; //!IMP

    //*Check if the dice rool is 1 ,if one chang the palyer to next
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //*Dynamically this will not change the palyer till one in not enconunterd
      // current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};

const hold = function () {
  // console.log("hold button");
  if (playing) {
    //!ADD current score to active palyer score
    scores[activePlayer] += currentScore;
    //* active palyer will be 1 &0 thus the score will be aadded to total for both the player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  //*Game over condition after reaching 100 points
  if (scores[activePlayer] >= 20) {
    playing = false;
    diceEl.classList.add("hidden");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    // *    After holding we need to switch the player
    switchPlayer();
  }
};

btnRoll.addEventListener("click", displayDice); //!Cant use displayDice() beacause it willimmediately invoke the function but we need after event listener
btnHold.addEventListener("click", hold);
btnNew.addEventListener("click", init);
