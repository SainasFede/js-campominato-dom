const main = document.querySelector('.game-griglia');
const startBtn = document.querySelector('#start');
const level = document.querySelector('#level-option');

const levelGame = [100, 81, 49];

startBtn.addEventListener('click', start);

function start(){
  const boxNumber = levelGame[level.value];
  console.log(boxNumber);
}