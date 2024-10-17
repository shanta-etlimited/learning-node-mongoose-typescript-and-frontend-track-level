{
    //constraints using keyof
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike " | "car" | "ship"; //manually

    type Owner2 = keyof Vehicle; //automatically

    const person1 : Owner = "car";
    const person2 : Owner2 = "bike";

    const getPropertyValue=<X, Y extends keyof X>(obj: X, key: Y)=>{
        return obj[key];
    }

    const user = {
        name: "Shanta",
        email: "shantamail.com",
        age: 27
    }
    const result1 = getPropertyValue(user, "name");
}