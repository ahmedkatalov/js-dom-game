const choice = ["бумага", "камень", "ножницы"];
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const results = document.getElementById("result")
const play = document.getElementById("game-start")
const rock = document.getElementById("rock")
const scissor = document.getElementById("scissor")
const paper = document.getElementById("paper")
const endResult = document.getElementById("end-results")
const container = document.getElementById("container")
const endGame = document.getElementById("choices")

const endGameComp = document.querySelector(".computer-icons")
const check = document.querySelector(".check")
const title = document.querySelector("h1")
const dateGame = document.querySelector(".date-game") 
const newSs = document.querySelector(".new-class")

let playerPoints = 0;
let computerPoints = 0;
let roundCount = 0;

play.addEventListener("click", () => {
  let newText = "make your choice"
  play.classList.add("disable-button")
  check.classList.remove("game-toggle")
  container.classList.remove("translate")
  title.textContent = newText
})

const playGame = function (playerSelection) {
  roundCount++;
  let getComputerChoices = choice[Math.floor(Math.random() * choice.length)];
  let result = "";

    //Индикатор для определении победил ли я за раунд 
  const rules = {
    "камень": "ножницы",
    "бумага": "камень",
    "ножницы": "бумага",
  }; 
 
  if (playerSelection === getComputerChoices) {
    result = "Это ничья";
    results.classList.remove("green");
    results.classList.remove("red");
  } else if (rules[playerSelection] === getComputerChoices) {
    results.classList.add("green");
    results.classList.remove("red");
    result = "Вы победили";
    playerPoints++;
  } else {
    results.classList.add("red");
    results.classList.remove("green");
    result = "Вы проиграли";
    computerPoints++;
  }
  //----------------------------------------------------------------------
  playerScore.textContent = `Игрок: ${playerPoints}`;
  computerScore.textContent = `Компьютер: ${computerPoints}`;
  results.textContent = result;
  //Показывает выбор компютера ввиде анимации 
  if (getComputerChoices === "камень") {
    rock.classList.remove("rock");
  } else {
    rock.classList.add("rock");
  }
  if (getComputerChoices === "ножницы") {
    scissor.classList.remove("scissor");
  } else {
    scissor.classList.add("scissor");
  }
  if (getComputerChoices === "бумага") {
    paper.classList.remove("paper");
  } else {
    paper.classList.add("paper");
  }
  //--------------------------------------------------------
  if (roundCount === 6) {
    endGame.classList.add("end-game");
    endGameComp.classList.add("end-game");
    //Добалвяет кнопку псоле окончания игры для того чтобы перезагрузить страничку
    const button = document.createElement('button');
    button.classList.add("glow-on-hover");
    button.textContent = "RESTART";
    check.prepend(button); // Исправлено: prepend вместо append
    button.addEventListener("click", () => {
      location.reload();
    });
   //---------------------------------------------------------------------------------
    results.textContent = "";
    endResult.textContent = `Игра окончена! Итоговый счет:\nИгрок: ${playerPoints}, Компьютер: ${computerPoints}`;

    // Устанавливаем стили для endResult в зависимости от результата игры
    if (playerPoints > computerPoints) {
      endResult.textContent = `Игра окончена! Вы выиграли эту битву !! Итоговый счет:\nИгрок: ${playerPoints}, Компьютер: ${computerPoints}`;
      endResult.classList.add("green");
      endResult.classList.remove("red");
    } else if (playerPoints === computerPoints) {
      endResult.textContent = `Игра окончена! НИЧЬЯ !! Итоговый счет:\nИгрок: ${playerPoints}, Компьютер: ${computerPoints}`;
      endResult.classList.remove("green");
      endResult.classList.remove("red");
    } else {
      endResult.textContent = `Игра окончена! Вы проиграли эту битву !! Итоговый счет:\nИгрок: ${playerPoints}, Компьютер: ${computerPoints}`;
      endResult.classList.add("red");
      endResult.classList.remove("green");
    }
  }
};
