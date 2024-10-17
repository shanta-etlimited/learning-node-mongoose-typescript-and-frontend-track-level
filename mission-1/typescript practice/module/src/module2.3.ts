{
    //generic type with type alias
    const rollNumbers : number[] = [1, 2, 3, 4, 5, 6];
    const mentors: string[] = ["Mr x", "Mr y", 'Mr z'];

    const boolArray : boolean[] = [true, false, true, false, true];

    //all of this are array type so in this situation we are using generic type

    const rollNumbers2 : Array<number> = [1, 2, 3, 4, 5, 6];
    const mentors2 : Array<string> = ["Mr x", "Mr y", 'Mr z'];

    const boolArray2 : Array<boolean> = [true, false, true, false, true];

    //dynamic generic
    type GenericArray<T>= Array<T>//here T means params

    const rollNumbers3 : GenericArray<number> = [1, 2, 3, 4, 5, 6];
    const mentors3 : GenericArray<string> = ["Mr x", "Mr y", 'Mr z'];
    const boolArray3 : GenericArray<boolean> = [true, false, true, false, true];

    const user: GenericArray<{name: string, age: number}>=[ 
        {
            name: "shanta",
            age: 27
        },
        {
            name: "shoshi",
            age: 27
        }
    ]

    //generic tuple with reusable 
    type GenericTuple<X,Y> = [X, Y]
    const manush: GenericTuple<string, string> = ["Mr. x", "Mr. y"];

    const userWithID: GenericTuple<number, {name: string, email: string}> = [1234, {
        name: "shanta", email: "shantamail.com"}]


}