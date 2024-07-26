let URL="https://cat-fact.herokuapp.com/facts";
let para=document.querySelector("p");
let btn=document.querySelector("#btn");

// let promise=fetch(URL);
// console.log(promise);

// similar with async function


const getdata=async()=>{
    let responce= await fetch(URL);
   
let data= await responce.json();
para.innerText=data[2].text;
}


btn.addEventListener("click",getdata);