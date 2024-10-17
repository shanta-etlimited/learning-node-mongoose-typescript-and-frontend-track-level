{
    //inheritence
    class Teacher{
        name: string
        age: number
        address: string
        contactNo? : string
        constructor(name: string, age: number, address: string, contactNo?: string){
            this.name = name
            this.age = age
            this.address = address
            this.contactNo = contactNo
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} is sleeping ${numOfHours} hours`)
        }
        takeClass(numOfHours: number){
            console.log(`${this.name} will take class ${numOfHours} hours`)
        }
    }

    const teacher = new Teacher("shanta", 23, "Dhaka")
    console.log(teacher)


    class Parent {
        name: string
        age: number
        address: string
        contactNo? : string
        constructor(name: string, age: number, address: string, contactNo?: string){
            this.name = name
            this.age = age
            this.address = address
            this.contactNo = contactNo
        }
        getSleep(numOfHours: number){
            console.log(`${this.name} is sleeping ${numOfHours} hours`)
        }
        
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string, contactNo?: string){
            super(name, age, address, contactNo)
        }
    }


}