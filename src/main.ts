import './style.css'
import { setupCounter } from './counter.ts'
import './topics/03-functions.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola mundo
`
console.log('Hello World!');


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
