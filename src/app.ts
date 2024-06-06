// classes
class Invoice {
    client: string;
    details: string;
    amount: Number;

    constructor(c: string, d: string, a: Number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes$${this.amount} for ${this.details}`
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 200);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let Invoices: Invoice[] = [];

// Invoices.push('hello');
// Invoices.push({name:'shaun'});

Invoices.push(invOne);
Invoices.push(invTwo);

invOne.client = 'yoshi';
invTwo.amount = 400;
// invTwo.amount = 'hello';

console.log(invOne, invTwo);



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})
