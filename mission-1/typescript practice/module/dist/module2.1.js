"use strict";
{
    // type assertion--> if we know the type of variable rather than typescipt then we can use type assertion
    let anything;
    anything = "Next Level Web Development";
    anything.toUpperCase();
    try {
        anything.toUpperCase();
    }
    catch (err) {
        console.log(err.message);
    }
}
