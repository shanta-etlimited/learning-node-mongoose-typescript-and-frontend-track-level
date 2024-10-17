{
    //spread operator 
    const bros1: string[] = ["Mir", "Firoz", "Mizan"];
    const bros2: string[] = ["Tonmoy", "Nahid"]
    bros1.push(...bros2)

    //rest operator
    const greetFriends = (...friends: string[]) =>{
        friends.forEach((friend:string)=> console.log(`hi ${friend}`)
        ) 
    }
    greetFriends("Mir", "Firoz", "Mizan")
}