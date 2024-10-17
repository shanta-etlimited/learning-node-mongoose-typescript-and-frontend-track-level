"use strict";
{
    //generic with function
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const res2 = createArrayWithGeneric("Bangladesh");
    const res3 = createArrayWithGeneric(true);
    const res4 = createArrayWithGeneric({ name: "shanta", age: 27 });
    // tuple generic with function
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res5 = createArrayWithTuple("shanta", 27);
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "shanta", age: 27 });
    const student2 = addCourseToStudent({ name: "shanta", email: "dfsjs@gmail.com", hasWatch: "Apple Watch" });
}
