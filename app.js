let score = document.querySelector(".scorecounter");
let holes = document.querySelectorAll(".hole");
let moles = document.querySelectorAll(".mole");

let currentHole;
let gameHasFinished = false;

let startGame = () => {
  score.textContent = 0;
  gameHasFinished = false;
  moleComeUp();
};

let randomTime = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

let randomHole = holes => {
  let i = Math.floor(Math.random() * holes.length);
  let hole = holes[i];
  if (hole === currentHole) {
    randomHole();
  }
  currentHole = hole;
  return hole;
};

let moleComeUp = () => {
  let time = randomTime(200, 1000);
  let hole = randomHole(holes);
  hole.classList.add("move");
  setTimeout(() => {
    hole.classList.remove("move");
    if (!gameHasFinished) moleComeUp();
  }, time);
};
