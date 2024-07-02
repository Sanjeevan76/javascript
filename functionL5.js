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


// //arrow function ,
const arroSum=(a,b)=>{
    console.log(a+b);
    
};

arroSum(10,10);

// // arrow function of multipliction

const arroMul=(x,y)=>
    {   
        console.log(x*y);
        return x*y;  //this will when you call the function on console it will not directly printed
        console.log(x*y); //this will not printed bcz after "return" function nothing will work

    };

    console.log(arroMul);//print  arrow function

    arroMul(5,10);
 // function with return function


    

    let cityName=["mumbai","bihar","pune","haryana"];

    cityName.forEach((name)=> //we can pass parameter to acces element index or array or all here parameter is only name which is acces the element only
    {
        console.log(name);
    });

    // map method (map method can store the element in the form of array)

    let arr=["Bihar","Pune","Delhi","aryana","Goa","Kerla"];

    let array1=arr.map((value,idx,arr)=>{ //here the parameter passes to acces element index and array
        console.log(value,idx,arr);
    });

    console.log(array1);

    //filter function

   let array2=[1,2,3,4,5,6,7,8,9,10];

  let evenNum= array2.filter((even)=>
{
    return even%2===0;
});

console.log(evenNum);

//reduce method

const arr1=[1,2,3,4];

const arrSum=arr1.reduce((prev,res)=>{
    return prev+res;
});

console.log(arrSum);

// we can also find grater or smaller element from the array
const greaterNum = arr1.reduce((prev,curr)=>{
    return prev>curr?prev :curr;
});

console.log(greaterNum);

    