let score = document.querySelector(".scorecounter");
let holes = document.querySelectorAll(".hole");
let moles = document.querySelectorAll(".mole");
let timeleft = document.querySelector(".timeleft");

let currentHole;
let gameHasFinished = false;
let scoreInternal = 0;

let startGame = () => {
  score.textContent = 0;
  scoreInternal = 0;
  gameHasFinished = false;
  moleComeUp();
  timeleft.style.display = "block";
  setTimeout(() => (gameHasFinished = true), 100000);
};

let randomTime = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

let randomHole = holes => {
  let i = Math.floor(Math.random() * 6);
  let hole = holes[i];
  if (hole === currentHole) {
    return randomHole(holes);
  } else {
  }
  currentHole = hole;
  return hole;
};

let moleComeUp = () => {
  let time = randomTime(400, 2000);
  let hole = randomHole(holes);
  hole.classList.add("move");
  setTimeout(() => {
    hole.classList.remove("move");
    if (!gameHasFinished) moleComeUp();
  }, time);
};

let hitMole = () => {
  scoreInternal++;
  score.textContent = scoreInternal;
};

moles.forEach(mole => mole.addEventListener("click", hitMole));
