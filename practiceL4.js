//practice question 01
let marks =[85,97,44,37,76,60];
let avgMarks=0;
for(let i=0;i<=5;i++)
    {
        avgMarks=avgMarks+marks[i];
    }

  let avgMarksAll=avgMarks/6;
  
  console.log(avgMarksAll);

  //practice question 02

  let items =[250,645,300,900,50];

  let i=0;
  for(let val of items)
    {
        console.log(`value at index ${i}=${val}`);
        let offer =val/10;
        items[i]=items[i]-offer;
        console.log(`value  after offer=${items[i]}`);
        i++;
    }

    //practice question 03

    let companies=["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];

  companies.shift(); //part(1)
  console.log(companies);

  companies.splice(2,1,"ola"); //part (2)
  console.log(companies);
  
 companies.push("amazone");//part (3)
 console.log(companies);

