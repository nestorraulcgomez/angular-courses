import { Product, taxCalculation } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia 3210',
        price: 150
    },
    {
        description: 'Iphone 13',
        price: 300
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log(`Total: ${total}`);
console.log(`Tax: ${tax}`);