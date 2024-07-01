//function creation

function myFunction()
{
    console.log("hyee my name is sanjeevan kumar");
    console.log("i am learning JS");
}

// //function call
myFunction();

// //input as a parameter

function myFunPara(msg) //here the 
{
    console.log(msg);
}

myFunPara("hyy everybody"); //we have to call the function with the input
myFunPara("i am learning JS ");//here the input is hyy everybody and i am lerning JS

//paramaeter with number

function twoPara(msg,n)
{
    console.log(msg,n);
}

twoPara("hii i am sam",9);

//function two find sun of two number

function sumNumber(a,b)
{   
    c=a+b;
    console.log("sum is =",c);
}

sumNumber(10,6);

// we can't acces x bcz it  is only block accesible

function sum(x,y)
{
    s=x+y;
    console.log("before function call");
    return s;
}

let val=sum(9,4);
// console.log(x);  //we can't print the value of x bcz it is block accesible
console.log(val);

