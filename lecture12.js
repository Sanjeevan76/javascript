// print after 2 sec delay
function hello(){
    console.log("hello");
}
// settimeout as a function
setTimeout(hello,2000);
setTimeout (()=>{
    console.log("hii my name is sam");
},4000);
// all other console print ,after 3 sec timeout statement print
console.log("one");
console.log("two");
console.log("three");
console.log("four");
setTimeout(()=>{
    console.log("after 3 sec");
},3000);
console.log("five");
console.log("six");

CALLBACKS

function sum (a,b){
    console.log(a+b);
}

function calculator (a,b,sumcallback)// here a=1,b=2,sumcallback=sum
{
    sumcallback(a,b);
}

calculator(1,2,sum); //calculator(1,2,(a,b)=>{ //we can do this also
                        // console.log(a+b);
                        //    });


//  CALLBACK HELL

 function getData(dataId,getNextdata)
 {
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextdata){
            getNextdata();
        }

    },2000);
 }

 getData(1,()=>{                      // data print one after other delay of 2 sec
    console.log("getting data 2.....");
    getData(2,()=>{
        console.log("getting data 3.....");
        getData(3,()=>{
            console.log("getting data 4.....");
            getData(4)
        });
    });
 });

//  promises

 let promise = new Promise((resolve,reject)=>{
    console.log("i am promise");
    resolve(123);
 });

 let promise = new Promise((resolve,reject)=>{
    console.log("i am promise");
    reject(123);
 });

function getData(dataId,getNextData){
    return new Promise ((resolve ,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

 let result=getData(123); // print data123 after 5 sec but staus is pending


 function getData(dataId,getNextData){
    return new Promise ((resolve ,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sucess"); //after adding this ,status will be sucess after 5 sec
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

 let result=getData(123);

//Then in Promise for resolve
 const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise");
        resolve("sucess");
    });
 };

 let promise =getpromise();

 promise.then((res)=>{
    console.log("promise fullfield",res);
 });


// Catch in promise for reject
 const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise");
        reject("error");
    });
 };

 let promise =getpromise();

 promise.then((res)=>{
    console.log("promise fullfield",res);
 });

// PROMISE CHAIN ***  method 1
function asyncFun1(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve ("sucess");
        },4000);
    });
};

function asyncFun2(){
  return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve ("sucess");
        },4000);
    });
};

console.log("fetching data 1.....");
let p1=asyncFun1();
p1.then ((res)=>{
    console.log("fetching data 2.....");
    let p2=asyncFun2();
    p2.then((res)=>{
        console.log(res);
    });
});

// method 2 important

function getdata(dataId){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sucess");
        },4000);

    });
}

console.log("getting data 1.....");
getdata(1).then((res)=>{
    console.log("fetching data 2.....");
    getdata(2).then((res)=>{
        console.log("fetching data 3.....");
        getdata(3).then((res)=>{
            console.log(res);
        });
    });
});

// async await

function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data");
            resolve("sucess");
        },3000);
    });
}

async function getdataValue(){
    await getdata();
}

getdataValue();


// print two or more data after regular time interval using async await

function getdata(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            resolve("sucess");
        },3000);
    });
};

async function dataPrint(){
    console.log("getting data 1.....");
    await getdata(1);
    console.log("fetching data 2.....");
    await getdata(2);
    console.log("fetching data 3.....");
    await getdata(3);
    console.log("fetching data 4.....");
    await getdata(4);
    console.log("fetching data 5.....");
    await getdata(5);
}

dataPrint();