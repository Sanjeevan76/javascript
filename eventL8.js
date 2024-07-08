// event handling
let button = document.querySelector("#btn");

button.onclick = ()=>{
    console.log("you clicked on button");
};

let div= document.querySelector("#box");
div.onmouseover =()=>{
    console.log("you are in inside box ")
};

//Event object
button.onclick = (evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log("you clicked on button");
};

//Event Listner

button.addEventListener("click",()=>{
    console.log("your from submitted");  //all event happen but in event handling it is not possible

});

const submit2=()=>{
    console.log("your form submitted 2");  //To delete any type of event we have to do like that
};

button.addEventListener("click",submit2);

button.addEventListener("click",()=>{
    console.log("your from submitted2");
});
button.addEventListener("click",()=>{
    console.log("your from submitted3");
});
button.addEventListener("click",()=>{
    console.log("your from submitted4");
});
 
// to remove any event

button.removeEventListener("click",submit2);
