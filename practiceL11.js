class User {
    constructor (name,email){
        
        this.name=name;
        this.email=email;
    }

    viewdata()
    {
        console.log("data");
    }

    
}

class admin extends User{
    editdata(){
    console.log("new data");
    }
}

let student = new User("sanjeevan" , "sam@gmail.com"); 
let teacher = new User("aman","aman@MediaList.com");

let admin1= new admin("sam","abc@email.com");

