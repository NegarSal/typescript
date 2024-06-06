"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes$${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 200);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let Invoices = [];
// Invoices.push('hello');
// Invoices.push({name:'shaun'});
Invoices.push(invOne);
Invoices.push(invTwo);
invOne.client = 'yoshi';
invTwo.amount = 400;
// invTwo.amount = 'hello';
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
