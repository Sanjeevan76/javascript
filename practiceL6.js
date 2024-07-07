//practice problem 01
// let content=document.querySelector("h2");
// content.innerText=content.innerText + " from apna college student";

//problem 02

let divs=document.querySelectorAll(".box");

//method 01

// divs[0].innerText="new content";
// divs[1].innerText="new content1";
// divs[2].innerText="new content2";

//method 02

let i=0;

for(div of divs)
    {
        div.innerText=`new content ${i}`;
        i++;
    }



