{
    //type alias object
    type Student = {
        name: string,  
        age: number,
        gender: string,
        address: string
        contactNo? : string
    }

    const student1: Student = {
        name: "shanta",
        age: 23,
        gender: "Female",
        address: "Dhaka",
        contactNo: "01722222222"
    }
    console.log(student1);

    //type alias string
    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "shanta";
    const isAdmin : IsAdmin = true;
    console.log(userName, isAdmin);

    //type alias function
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;
    console.log(add(2, 5));
    
    
}