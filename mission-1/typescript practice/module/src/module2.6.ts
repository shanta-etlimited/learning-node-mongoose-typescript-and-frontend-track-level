{
    //constraints---> force koralai constraints
    const addCourseToStudent = <T extends {name: string, email: string}>(student: T) =>{
        const course = "Next Level Web Development"
        return {...student, course}
    }

    const student1 = addCourseToStudent({name: "shanta", email: "sdfsf@gmail.com"})
    const student2 = addCourseToStudent({name: "shanjida", email: "dfsjs@gmail.com", hasWatch: "Apple Watch"})
}