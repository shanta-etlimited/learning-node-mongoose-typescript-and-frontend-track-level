{
//string
let firstName : string = "shanta"
//number
let roll : number = 123
//boolean
let isAdmin : boolean = true
//undefined
let x : undefined = undefined
//null
let y : null = null
//array
let friends : string[] = ["sakib","monica"]
let eligibleRollList : number[] = [1, 3, 5]
//tuple
let coordinates : [number, number]= [1, 5]
let ageName : [number, string, boolean] = [50, "Mr.x", true]
//object
const user : {
    firstName: string
    middleName?: string //optional
    lastName: string
    isMarried: boolean
    company: "ET Tech" // this is literal type because it's fixed
    readonly address: string
} = {
    firstName: "Shanta",
    lastName: "Shorna",
    isMarried: true,
    company: "ET Tech",
    address: "Dhaka"
}
//function--> learning function, modern function , arrow function
function add(num1: number, num2: number): number{
    return num1 + num2;
}

add(2, 5);

const addArrow = (num1:number, num2:number): number=> num1 + num2

//object --> function -->method
const poorUser = {
    name: "Shanta",
    balance: 0,
    addBalance(balance: number): string{
        return `My current balance is ${this.balance + balance}`
    }
}
//map 
const arr : number[] = [1, 4, 10]
const newArray : number [] = arr.map((elem: number): number=> elem * elem)
}








  











