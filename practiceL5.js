// lecture 5 practice question 01

let array=[2,1,4,9,6,5,7];

array.forEach((val)=>{
    console.log(val*val);
});

//lecture 05 practice question 02
const studMark=[88,90,36,99,98,91,90];

 let passStudent=studMark.filter((marks)=>
{
    return marks>90;
});

console.log(passStudent);


// lecture 05 practice problem 03

let n=prompt("enter any number");

let arr=[];

for(let i=1;i<=n;i++)
    {
        arr[i-1]=i;
    }

    console.log(arr);

    const arrSum=arr.reduce((prev,curre)=>
    {
        return prev+curre;
    });

    console.log(arrSum);


    const arrMul=arr.reduce((prev,curre)=>{
        return prev*curre;
    });

    console.log(arrMul);

