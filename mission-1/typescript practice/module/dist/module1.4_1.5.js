"use strict";
{
    //string
    let firstName = "shanta";
    //number
    let roll = 123;
    //boolean
    let isAdmin = true;
    //undefined
    let x = undefined;
    //null
    let y = null;
    //array
    let friends = ["sakib", "monica"];
    let eligibleRollList = [1, 3, 5];
    //tuple
    let coordinates = [1, 5];
    let ageName = [50, "Mr.x", true];
    //object
    const user = {
        firstName: "Shanta",
        lastName: "Shorna",
        isMarried: true,
        company: "ET Tech",
        address: "Dhaka"
    };
    //function--> learning function, modern function , arrow function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    const addArrow = (num1, num2) => num1 + num2;
    //object --> function -->method
    const poorUser = {
        name: "Shanta",
        balance: 0,
        addBalance(balance) {
            return `My current balance is ${this.balance + balance}`;
        }
    };
    //map 
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
}
