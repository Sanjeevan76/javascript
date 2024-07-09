let boxes = document.querySelectorAll(".box");
currMode="O";

let resetBtn =document.querySelector("#res_btn");
let Newbtn =document.querySelector("#new_btn");
let winner=document.querySelector(".win_msg");
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    
  ];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
       if(currMode==="O")
       {
        currMode="X";

       }
        else
        {
            currMode="O";
        }
        box.innerText=currMode;
        box.disabled="true";
        count++;
        let winnerFound=WinnerCheck();
        if(count===9 && !winnerFound )
        {
            drawWinner();
        }

       
    });

});

const drawWinner =()=>{
        winner.innerText="game Draw, Let's play again";
    enablBtn();
};

let winnerMsg=(win)=>{
   winner.innerText= winner.innerText=`Congratulation winner is ${win}`;
    
};

const WinnerCheck =()=>{
    for(let patter of winPatterns)
    {       
        let pos1=boxes[patter[0]].innerText;
        let pos2=boxes[patter[1]].innerText;
        let pos3=boxes[patter[2]].innerText;
        if (pos1!="" && pos1!="" && pos1!="")
        {
            if(pos1==pos2 && pos1===pos3)
            {
                console.log(`winner is ${pos1}`);
                winnerMsg(pos1);
                for(let box of boxes){
                box.disabled=true;
                }
            }
        }
        
    }
};

const enablBtn=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        
    }
};

resetBtn.addEventListener("click",()=>{
    currMode="O";
    enablBtn();
    winner.innerText="let's play"
});

Newbtn.addEventListener("click",()=>{
    currMode="O";
    enablBtn();
    winner.innerText="let's play"
});

