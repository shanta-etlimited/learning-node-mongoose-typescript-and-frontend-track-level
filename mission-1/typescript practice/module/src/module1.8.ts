{
    //object destructuring
    const user = {
        name: "shanta",
        contactNo: 54689,
        address: "Dhaka",
    }

    const {contactNo} = user;
    console.log(contactNo); 

    //array destructuringh
    const numbers = [1, 2, 3, 4, 5];
    const [firstNumber, secondNumber] = numbers;
    const [,, thirdNumber, ...rest] = numbers;
    console.log(firstNumber, secondNumber, thirdNumber, rest);
    
}