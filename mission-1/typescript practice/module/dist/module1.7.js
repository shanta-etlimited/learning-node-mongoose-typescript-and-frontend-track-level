"use strict";
{
    //spread operator 
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tonmoy", "Nahid"];
    bros1.push(...bros2);
    //rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetFriends("Mir", "Firoz", "Mizan");
}
