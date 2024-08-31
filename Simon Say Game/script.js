// -------------Simon Say Game------------->
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// --s-1--->
document.addEventListener("keypress", function(){
  //jab game start na ho tbi
  if(started == false){
    console.log("game is started");
    started = true;
    levelUp();
  }
});

//--s-3 btn flash ho jaye--->
function gameFlash(btn){
  btn.classList.add("flash");
  // kuch time ke bad remove ho jaye flash class
  setTimeout(function (){
    btn.classList.remove("flash");
  },250);
}

function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function (){
    btn.classList.remove("userFlash");
  },250);
}
//--s-2---start hone ke bad level up--->
function levelUp(){

  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);

  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);

  gameSeq.push(randColor);
  console.log(gameSeq)
  gameFlash(randBtn);
}
function checkAns(){
  for (let i = 0; i < userSeq.length; i++) {
    if (userSeq[i] !== gameSeq[i]) {
      h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br>Press any key to start.`;
      document.querySelector("body").style.backgroundColor = "red";

      setTimeout( function(){
        document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      reset();
      return;
    }
  }

  if (userSeq.length === gameSeq.length) {
    setTimeout(levelUp, 1000);
  }
}

//---s-4--->
function btnPress(){
  //console.log(this);// kis btn ko press kiya
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click", btnPress);
}

function reset(){
  started = false;
  userSeq =  [];
  gameSeq = [];
  level = 0;
  h2.innerText = "Press any key to start";
}