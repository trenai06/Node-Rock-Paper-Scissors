const readline = require("readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function gameStart() {
  guessCount = 1;
  computerCount = 1;
  rl.question(`Want to play Rock, Paper, Scissors?`, (answer) => {
    if (answer == "yes") {
      console.log(`Cool! Let's see what you got! Best out of 3.`);
      computerChoice();
      playerGuess();
    } else {
      console.log("Oh, well");
      rl.close();
    }
  });
}

choices = ["rock", "paper", "scissors"];

function computerChoice() {
  i = Math.floor(Math.random() * choices.length);
  computerAnswer = choices[i];
  console.log(computerAnswer);
  return computerAnswer;
}

function playerGuess() {
  rl.question(`What's it gonna be?`, (guess) => {
    if (guessCount < 3 && computerCount < 3) {
      if (guess == "rock" && computerAnswer == "paper") {
        computerCount++;
        console.log(`Sorry, paper covers rock. Choose again!`);
        computerChoice();
        playerGuess();
      } else if (guess == "paper" && computerAnswer == "scissors") {
        computerCount++;
        console.log(`Sorry, scissors cut paper. Choose again! `);
        computerChoice();
        playerGuess();
      } else if (guess == "scissors" && computerAnswer == "rock") {
        computerCount++;
        console.log(`Sorry, rock smashes scissors. Choose again!`);
        computerChoice();
        playerGuess();
      } else if (guess == "rock" && computerAnswer == "scissors") {
        guessCount++;
        console.log(`Yes! Rock smashes scissors! Choose again!`);
        computerChoice();
        playerGuess();
      } else if (guess == "scissors" && computerAnswer == "paper") {
        guessCount++;
        console.log(`Yes! Scissors cut paper! Choose again!`);
        computerChoice();
        playerGuess();
      } else if (guess == "paper" && computerAnswer == "rock") {
        guessCount++;
        console.log(`Yes! Paper covers rock! Choose again!`);
        computerChoice();
        playerGuess();
      }
    } else if (computerCount === 3) {
      console.log(`You Lose!`);
      gameStart();
    } else if (guessCount === 3) {
      console.log(`You Win!!`);
      gameStart();
    }
  });
}

gameStart();
