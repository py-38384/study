let id: number = 5
let company: string = 'Piyal crop.'
let isPublised: boolean = true
let x: any = 79

let ids: number[] = [6,93,9]
type User = {
    id: number,
    name: string
}
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}
interface MathFunc {
    (x: number, y:number): number
}
const user: UserInterface = {
    id: 367,
    name: 'piyal'
}

function addNum(num1: number, num2: number): number{
    return num1 + num2
}

function log(message: string){
    console.log(message);
}