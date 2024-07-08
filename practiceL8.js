
// //normal method
let btn=document.querySelector("#btn");
let currMode="light";
let body=document.querySelector("body");

btn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        console.log(currMode);
        body.style.backgroundColor="black";
    }
    else{
        currMode="light";
        console.log(currMode);
        body.style.backgroundColor="white";
    }
   
});

//using css

btn.addEventListener("click",()=>{
    if(currMode==="light")
    {   
        body.classList.add("dark");
        body.classList.remove("light");
        currMode="dark";
    }

    else
    {
        body.classList.add("light");
        body.classList.remove("dark");
        currMode="light";
    }
});



