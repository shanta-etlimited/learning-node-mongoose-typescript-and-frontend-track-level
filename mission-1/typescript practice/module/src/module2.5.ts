{
    //generic with function

    const createArray = (param: string): string[] =>{
        return [param]
    }
    const createArrayWithGeneric = <T>(param: T): T[] =>{
        return [param]
    }

    const res1 = createArray("Bangladesh")
    const res2 = createArrayWithGeneric<string>("Bangladesh")
    const res3 = createArrayWithGeneric<boolean>(true)
    const res4 = createArrayWithGeneric<{ name: string, age: number }>({name: "shanta", age: 27})

    // tuple generic with function
    const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] =>{
        return [param1, param2]
    }

    const res5 = createArrayWithTuple<string, number>("shanta", 27)

    const addCourseToStudent = <T>(student: T) =>{
        const course = "Next Level Web Development"
        return {...student, course}
    }

    const student1 = addCourseToStudent({name: "shanta", age: 27})
    const student2 = addCourseToStudent({name: "shanta", email: "dfsjs@gmail.com", hasWatch: "Apple Watch"})
}