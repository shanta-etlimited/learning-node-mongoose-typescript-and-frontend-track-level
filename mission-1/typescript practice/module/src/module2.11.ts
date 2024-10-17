{
    //utility type
    type Person = {
        name: string;
        age: number;
        email?: string
        contactNo: string
    }
    //pick
    type Name = Pick<Person, "name" | "contactNo">;

    //omit
    type ContactInfo = Omit<Person, "name" |  "age">

    //required
    type RequiredPerson = Required<Person>

    //partial
    type PartialPerson = Partial<Person>

    //readonly
    type ReadonlyPerson = Readonly<Person>

    //record
     type MyObj = Record<string, string>
     const obj1: MyObj = {
        a: "a",
        b: "b",
     }
     const obj2: MyObj = {
        a: "a",
        b: "b",
        c: "c",
        d: 'fdg'
     }

     const EmptyObj : Record<string, unknown> = {}
     
}