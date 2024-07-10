let option=document.querySelectorAll(".box");
let msg_show =document.querySelector("#msg-show");
let userCount=0;
let comptCount=0;
let drawCount=0;
let score_comp=document.querySelector("#score-comp");
let score_user=document.querySelector("#score-user");
let score_draw=document.querySelector("#score-draw");

const showWinner=(userWin, user_choice, comp_choice)=>{
    if (userWin) {
        userCount++;
        score_user.innerText++;
        msg_show.innerText = `You win! Your ${user_choice} beats ${comp_choice}`;
        msg_show.style.backgroundColor = "green";
      } else {
        comptCount++;
        score_comp.innerText++;
        msg_show.innerText = `You lost. ${comp_choice} beats your ${user_choice}`;
        msg_show.style.backgroundColor = "red";
      }
};

const gamePlay=(comp_choice,user_choice)=>{
    if(comp_choice===user_choice)
    {
        msg_show.innerText="game draw";
        drawCount++;
        score_draw.innerText=drawCount;
        msg_show.style.backgroundColor="#2a9d8f";
        msg_show.style.color="black";
    }

    else {
        let userWin = true;
        if (user_choice === "rock") {
          //scissors, paper
          userWin = comp_choice === "paper" ? false : true;
        } else if (user_choice === "paper") {
          //rock, scissors
          userWin = comp_choice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = comp_choice === "rock" ? false : true;
        }
        showWinner(userWin, user_choice, comp_choice);
      }
    

};

const compChoice=(userChoice)=>{
    let compOption=["rock","paper","scissors"];
    let idx=Math.floor(Math.random() * 3);
    console.log(`computer choice is ${compOption[idx]}`);
    let comp_choice=compOption[idx];
    let user_choice=userChoice;
    gamePlay(comp_choice,user_choice);
};


option.forEach((box) => {
    box.addEventListener("click", () => {
      const userChoice = box.getAttribute("id");
      console.log(userChoice);
      compChoice(userChoice);
    });
  });