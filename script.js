//Here we just get all the html elements reqquired for the game
const endDino = document.querySelector(".endDino");
const container = document.getElementById("container_game");
const dinoObject = document.querySelector(".dino_object");
const enemyObject = document.querySelector(".enemy_object");
const messageGameOn = document.getElementById("gameOn");
const score = document.querySelector(".score");
const startButton = document.querySelector(".gradient-btn-1");
const gameOver = document.getElementById("gameOver");
let interval = null;
let incrementScore = 0;
let name;
////////////////////////////////////////////////////////////////////////

//Here we get the user's name
let userName = () => {
  name = prompt("Enter one player's name please...");
  if (!isNaN(name)) {
    alert("Please we only accept strings data");
    location.reload(true);
  }
};
////////////////////////////////////////////////////////////////////////////

//The start function is declared here
let start = () => {
  startButton.style.display = "none";
  messageGameOn.style.display = "none";
  enemyObject.className = "enemy_object_order";
  interval = setInterval(scoreFunc, 200);
  dinoOrder();
};
////////////////////////////////////////////////////////////////////////

//Here is the audio function which is played when playing the game
let audio = () => {
  let y = document.createElement("audio");

  y.setAttribute("src", "6 bossClose.mp3");
  y.setAttribute("controls", "controls");
  y.setAttribute("autoplay", "autoplay");
  y.setAttribute("loop", "loop");
  y.style.display = "none";
  document.body.appendChild(y);
};

///////////////////////////////////////////////////////////////////////////

//Here we change our enemies in each function
let changeEnemyOne = () => {
  enemyObject.src = "CarefreeMeanFritillarybutterfly.webp";
};

let changeEnemyTwo = () => {
  enemyObject.src = "ParchedTediousEmeraldtreeskink.webp";
};

let changeEnemyThree = () => {
  enemyObject.src = "enemyDino.png";
};

let changeEnemyFour = () => {
  enemyObject.src = "InfantileDemandingDuckbillplatypus.webp";
};

let changeEnemyFive = () => {
  enemyObject.src = "snake.png";
};

let changeEnemySix = () => {
  enemyObject.src = "MerryPertinentBluet.webp";
};

let changeEnemySeven = () => {
  enemyObject.src = "NewSmoothBoar.webp";
};
/////////////////////////////////////////////////////////////////////////////////

//Here we change the backgroundImage of the game in each function
let changeBg1 = () => {
  container.style.backgroundImage = "url('bacg.jpg')";
};

let changeBg2 = () => {
  container.style.backgroundImage = "url('istockphoto-604014064-612x612.jpg')";
};

let changeBg3 = () => {
  container.style.backgroundImage = "url('istockphoto-837158024-612x612.jpg')";
};

let changeBg4 = () => {
  container.style.backgroundImage = "url('istockphoto-1018932058-612x612.jpg')";
};

let changeBg5 = () => {
  container.style.backgroundImage = "url('istockphoto-1223239593-612x612.jpg')";
};

let changeBg6 = () => {
  container.style.backgroundImage = "url('istockphoto-1301842537-612x612.jpg')";
};

let changeBg7 = () => {
  container.style.backgroundImage = "url('istockphoto-941014394-612x612.jpg')";
};
//////////////////////////////////////////////////////////////////////////////////

//We declare the score funnction
let scoreFunc = () => {
  incrementScore++;
  score.innerHTML = "<b>Score : " + incrementScore + "</b>";
  ////////////////////////////////////////////////////////////////////////////////

  //Here we check the score and substitute the backgroundImage and the enemies depending on the score reached
  if (incrementScore === 100) {
    changeEnemyOne();
    changeBg1();
  }
  if (incrementScore === 200 || incrementScore === 1000) {
    changeEnemyTwo();
    changeBg2();
  }
  if (incrementScore === 300 || incrementScore === 2000) {
    changeEnemyThree();
    changeBg3();
  }
  if (incrementScore === 400 || incrementScore === 3000) {
    changeEnemyFour();
    changeBg4();
  }
  if (incrementScore === 500 || incrementScore === 4000) {
    changeEnemyFive();
    changeBg5();
  }
  if (incrementScore === 600 || incrementScore === 5000) {
    changeEnemySix();
    changeBg6();
  }
  if (incrementScore === 700 || incrementScore === 6000) {
    changeEnemySeven();
    changeBg7();
  }
};
/////////////////////////////////////////////////////////////////////////////////////////

//The jump function for animating the dinosaure
let jump = () => {
  dinoObject.classList.add("dinoJump");
  setTimeout(() => {
    dinoObject.classList.remove("dinoJump");
  }, 400);
};
////////////////////////////////////////////////////////////////////////////////////////

//In this interval, we play with the dino and enemies css properties to make the user fail whether there is a collision
let dinoAlive = setInterval(() => {
  let dinoTopPosition = parseInt(
    window.getComputedStyle(dinoObject).getPropertyValue("top")
  );

  let dinoLeftPosition = parseInt(
    window.getComputedStyle(dinoObject).getPropertyValue("left")
  );

  let enemyLeftPosition = parseInt(
    window.getComputedStyle(enemyObject).getPropertyValue("left")
  );

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  //collision detection:
  //For this calculations made on the two objects we created, if the enemy hits the dinosaure, it's  a game over and we restart the game

  if (
    enemyLeftPosition < 170 &&
    enemyLeftPosition > 0 &&
    dinoTopPosition >= 340
  ) {
    alert("Sorry " + name + " you failed ! \n Score : " + incrementScore);
    location.reload(true);
  }
  //Each enemy disappears for a negative value
  //  if (enemyLeftPosition < 0) {
  //     enemyObject.style.display = 'none';
  //  }else {
  //    enemyObject.style.display = '';
  //  }
}, 50);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//This function excecutes the previous jump() function avoiding a reset while pressing a keydown
let dinoOrder = () => {
  document.addEventListener("keydown", (e) => {
    if (!dinoObject.classList.contains("dinoJump")) {
      jump();
    }
  });
  document.addEventListener("click", (e) => {
    if (!dinoObject.classList.contains("dinoJump")) {
      jump();
    }
  });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The start function here listens to the click of the user to start the game, playing the song
startButton.addEventListener("click", () => {
  userName();
  start();
  audio();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//End of the script

//Micheal is the author of the game
