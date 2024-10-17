"use strict";
{
    //ternary operator--> ternary operator always work wwith falsy value
    const age = 18;
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    //nullish coalescing operator---> if value will be null or undefined then here value will be assigned to default value for decision making of using nullish coalescing. nullish coalescing operator work only with null and undefined
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest User";
    console.log({ result1 });
}
