{
    //interface ---->
    interface IsAdmin{
        name: string;
        age: number;
        address: string;
        contactNo: string;
    }

    const isAdmin: IsAdmin = {
        name: "shanta",
        age: 23,
        address: "Dhaka",
        contactNo: "01722222222"
    }
    console.log(isAdmin);

    //type alias vs interface----> interface and type type alias used for object and all premitive data will be used in type alias
    type User1 = {
        name: string;
        age: number;  
    }
    interface User2 {
        name: string;
        age: number;
    }
    type UserWithRole1 = User1 & {
        role: string
    }
    interface UserWithRole2 extends User2{
        role: string
    }

    const user1 : UserWithRole1 ={
        name: "shanta",
        age: 23,
        role: "admin"
    }
    const user2 : UserWithRole2 = {
        name: "shanta",
        age: 23,
        role: "admin"
    }
    console.log(user1, user2);
    
    //mixing up interface and type alias
    interface UserWithRole2 extends User1{
        role: string
    }//here User1 is type alias and UserWithRole2 is interface

    const user3 : UserWithRole2 = {
        name: "shanta",
        age: 23,
        role: "admin"
    }
    console.log(user3);

    // type alias object
    const rollNumbers= [1, 4, 6]
    type Roll = number[];
    interface Roll2 {
        [index: number]: number
    }
    const rollNumber1 : Roll = rollNumbers// type alias
    const rollNumber2 : Roll2 = rollNumbers;// interface
    console.log(rollNumber1, rollNumber2);
    

}