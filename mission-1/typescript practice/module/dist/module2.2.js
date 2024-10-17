"use strict";
{
    const isAdmin = {
        name: "shanta",
        age: 23,
        address: "Dhaka",
        contactNo: "01722222222"
    };
    console.log(isAdmin);
    const user1 = {
        name: "shanta",
        age: 23,
        role: "admin"
    };
    const user2 = {
        name: "shanta",
        age: 23,
        role: "admin"
    };
    console.log(user1, user2);
    const user3 = {
        name: "shanta",
        age: 23,
        role: "admin"
    };
    console.log(user3);
    // type alias object
    const rollNumbers = [1, 4, 6];
    const rollNumber1 = rollNumbers; // type alias
    const rollNumber2 = rollNumbers; // interface
    console.log(rollNumber1, rollNumber2);
}
