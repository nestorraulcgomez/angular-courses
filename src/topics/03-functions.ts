


function addNumbers(a: number, b : number) : number {
    return a + b
}

const addNumbersArrow = (a : number, b : number) : string => {
    return `${a + b}`
}

function multiply(firstNumber: number, secondNumber: number = 3, base: number = 2) : number { 
    return firstNumber * base * secondNumber ;
}

const result = addNumbers(1, 2)
const result2 = addNumbersArrow(1, 2)
const result3 = multiply(5)

console.log({ result });
console.log({ result2 });
console.log({ result3 });



export {}