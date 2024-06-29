//practice problem 01 leecture 02
const number=prompt("please enter any number");

if(number%5===0)
    {
        console.log(number, "is multiple of 5");
    }

    else{
        console.log(number,"is not multiple of 5");
    }

    //practise problem 02 grade system

    const marks=prompt("Enter marks of the studend");

    //100-80=a
    // 70-89=b
    // 60-69=c
    // 50-59=d
    // 0-49=f

    if(marks>=80)
        {
            console.log("student got A grade");
        }

        else if(marks>=70 && marks<=79)
            {
                console.log("student got B grade");
            }

            else if(marks>=60 && marks<=69)
                {
                    console.log("student got C grade");
                }
                else if(marks>=50 && marks<=59)
                    {
                        console.log("student got D grade");
                    }
                    else
                    {
                        console.log("student is fail");
                    }